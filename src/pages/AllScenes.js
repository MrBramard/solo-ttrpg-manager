import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Main from "../components/layout/Main";
import Sidebar from "../components/layout/Sidebar";

function AllScenes() {
    const [scenes, setScenes] = useState(JSON.parse(localStorage.getItem("scenes"))||[])
    const [activeScene, setActiveScene] = useState(false);

    useEffect(() => {
        localStorage.setItem("scenes", JSON.stringify(scenes));
    }, [scenes]);

    const onAddScene = () => {
        const newScene = {
            id: uuid(),
            title: "Untitled Scene",
            content: "",
            lastModified: Date.now()
        };

        setScenes([newScene, ...scenes]);
    }  

    const onDeleteScene = (idToDelete) => {
        setScenes(scenes.filter((scene) => scene.id !== idToDelete))
    }

    const getActiveScene = () => {
        return scenes.find((scene) => scene.id === activeScene)
    }

    const onUpdateScene = (updatedScene) => {
        const updatedScenes = scenes.map((scene) => {
            if(scene.id === activeScene) {
                return updatedScene;
            }
            return scene;
        });

        setScenes(updatedScenes);
    }
 
    return <div className="App">
        <Sidebar 
            scenes={scenes}
            onAddScene={onAddScene}
            onDeleteScene={onDeleteScene}
            activeScene={activeScene} 
            setActiveScene={setActiveScene}
        ></Sidebar>
        <Main activeScene={getActiveScene()} onUpdateScene={onUpdateScene}></Main>
    </div>
}

export default AllScenes;