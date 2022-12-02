import styles from './TextInput.module.scss';

const TextInput = (pros) => {
    return <input className={styles.input} placeholder={pros.placeholder} type="text" />
}

export default TextInput;