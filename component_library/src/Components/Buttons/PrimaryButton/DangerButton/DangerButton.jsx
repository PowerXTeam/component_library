import s from './DangerButton.module.css';

const DangerButton = (props) => {
    return (<button className={`${s['danger-button']} ${s[props.modif] || ''}`}>{props.content}</button>);
}

export default DangerButton;