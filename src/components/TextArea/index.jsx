import style from './textArea.module.css'

export const Textarea = ({children, ...rest}) => {
    return <textarea className={style.textarea} {...rest}>
        {children}
    </textarea>
}