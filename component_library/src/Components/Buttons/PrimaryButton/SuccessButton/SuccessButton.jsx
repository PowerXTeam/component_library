import s from './SuccessButton.module.css';

const SuccessButton = (props) => {
    return (<button className={`${s['success-button']} ${s[props.modif] || ''}`}>{props.content}</button>);
}

export default SuccessButton;