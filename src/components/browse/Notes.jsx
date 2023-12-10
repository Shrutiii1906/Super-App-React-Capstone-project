import { useState } from "react"
import Edit from "../../../Images/edit.png"
import pen from "../../../Images/pen.png"
import styles from "./Notes.module.css"

const Notes = ()=>{
    const [text, setText] = useState(window.localStorage.getItem("text"))
    console.log(text)
    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",text)
    }
return (
  <div className={styles.container}>
    <p className={styles.title}>All notes</p>
    <textarea className={styles.textarea} value={text} onChange={handleChange}/>
    <img className={styles.editIcon} src={Edit} alt="" />
    <img className={styles.penIcon} src={pen} alt="" />
  </div>
)
}

export default Notes