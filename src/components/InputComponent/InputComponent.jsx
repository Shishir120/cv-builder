import React from "react";
import styles from './InputComponent.module.css';

const InputComponent = ({label, ...props}) => {
    return (
        <div className={styles['input-component']}>
            {label && <label>{label}</label>}
            <input type="text" {...props} />
        </div>
    )
}

export default InputComponent