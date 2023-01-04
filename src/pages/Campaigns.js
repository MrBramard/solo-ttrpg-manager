import { useEffect, useRef, useState } from "react";
import uuid from "react-uuid";
import Modal from "../components/Modal";
import classes from "./Campaigns.module.css";

function Campaigns() {
    const [campaigns, setCampaigns] = useState(JSON.parse(localStorage.getItem("campaigns")) || []);
    const [newCampaignModalOpen, setNewCampaignModalOpen] = useState(false);
    const [deleteCampaignModalOpen, setDeleteCampaignModalOpen] = useState(false);
    const [campaignToDelete, setCampaignToDelete] = useState(false);

    const newCampaignTitleRef = useRef();
    const newCampaigneTaglineRef = useRef();

    useEffect(() => {
        localStorage.setItem("campaigns", JSON.stringify(campaigns));
    }, [campaigns]);

    const onNewCampaign = () => {
        setNewCampaignModalOpen(true);
    };

    const onDeleteCampaign = (idToDelete) => {
        setCampaignToDelete(idToDelete);
        setDeleteCampaignModalOpen(true);
    }

    const onConfirmDeleteCampaign = () => {
        setCampaigns(campaigns.filter((campaign) => campaign.id !== campaignToDelete));
        setCampaignToDelete(false);
        setDeleteCampaignModalOpen(false);
    }

    const onCloseNewCampaignModal = () => {
        setNewCampaignModalOpen(false);
    }

    const onCloseDeleteCampaignModal = () => {
        setDeleteCampaignModalOpen(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        setCampaigns([{
            id: uuid(),
            title: newCampaignTitleRef.current.value,
            tagline: newCampaigneTaglineRef.current.value
        },
        ...campaigns]);
        onCloseNewCampaignModal();
    }

    return (<div>
        <div className={classes.list}>
            <div className={classes.titleBar}>
                <div>My Campaigns</div>
                <button onClick={onNewCampaign}>New</button>
            </div>
            {
                campaigns.map((campaign) => {
                    return <div className={classes.listItem} key={campaign.id}>
                        <div className={classes.titleBar}>
                            <div>{campaign.title}</div>
                            <button onClick={() => onDeleteCampaign(campaign.id)}>&times;</button>
                        </div>
                        <small>{campaign.tagline}</small>
                    </div>
                })
            }
        </div>

        <Modal title="New Campaign"
            visible={newCampaignModalOpen}
            onCloseModal={onCloseNewCampaignModal}>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Campaign title</label>
                <input type="text" name="title" id="title" autoFocus ref={newCampaignTitleRef}/>
                <label htmlFor="tagline">Campaign tagline</label>
                <input type="text" name="tagline" id="tagline" ref={newCampaigneTaglineRef}/>
                <button>Create</button>
            </form>
        </Modal>

        <Modal title="Delete the campaign ?"
            visible={deleteCampaignModalOpen}
            onCloseModal={onCloseDeleteCampaignModal}>
            <button className={classes.noButton} onClick={onCloseDeleteCampaignModal}>No</button>
            <button onClick={onConfirmDeleteCampaign}>Yes</button>
        </Modal>
    </div>);
}

export default Campaigns;