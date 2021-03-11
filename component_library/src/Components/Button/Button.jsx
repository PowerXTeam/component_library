import s from './Button.module.css';

const Button = ({type, isDisabled, icon, content}) => {
    let classes = `
        ${s[type]}
        ${isDisabled === 'true' ? (' ' + s[`${type}--disabled`]) : ''}
    `;

    if (icon) {
        return (
            <button className={s["button-w-icon"] + ' ' + classes}>
                <span className={s["button-w-icon__icon"]}><img src={icon} /></span>
                <span>{content}</span>
            </button>
        )
    } else {
        return (
            <button className={s["button-primary"] + ' ' + classes}>
                <span>{content}</span>
            </button>
        )
    }
};

export default Button;