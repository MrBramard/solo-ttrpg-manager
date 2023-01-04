import classes from './Modal.module.css';

function Modal({ title, visible, onCloseModal, ...props }) {
    if (!visible) {
        return null;
    }
    else {
        return (<div className={classes.modalBackground}>
            <div className={classes.modalContent}>
                <div className={classes.titleBar}>
                    {title}
                    <span className={classes.close} onClick={onCloseModal}>&times;</span>
                </div>
                <hr />
                {props.children}
            </div>
        </div>);
    }
}

export default Modal;