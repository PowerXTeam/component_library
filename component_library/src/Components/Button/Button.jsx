import s from './Button.module.css';

const Button = (props) => {
    let classes = `
        ${s[props.type]}
        ${props.isDisabled === 'true' ? (' ' + s[`${props.type}--disabled`]) : ''}
    `;

    if (props.icon) {
        return (
            <button className={s["button-w-icon"] + ' ' + classes}>
                <span className={s["button-w-icon__icon"]}><img src={props.icon} /></span>
                <span>{props.content}</span>
            </button>
        )
    } else {
        return (
            <button className={s["button-primary"] + ' ' + classes}>
                <span>{props.content}</span>
            </button>
        )
    }
};

export default Button;