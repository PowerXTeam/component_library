import s from './InfoButton.module.css';

const InfoButton = (props) => {
    return (<button className={`${s['info-button']} ${s[props.modif] || ''}`}>{props.content}</button>);
}

export default InfoButton;