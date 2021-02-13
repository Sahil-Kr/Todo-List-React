import React, { useState } from "react";
import classes from "./CreateTask.module.css";

const CreateTask = (props) => {
  const [content, setContent] = useState("");

  const addTaskToList = () => {
    if (!content) return;

    props.addTaskToList({ content: content });
    setContent("");
  };

  return (
    <div className={classes.CreateTask}>
      <div className={classes.Heading}>Create Task</div>
      <textarea
        name="task"
        id="task"
        cols="30"
        rows="10"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <button className={classes.Btn} id="btn" onClick={addTaskToList}>
        SAVE
      </button>
    </div>
  );
};

export default CreateTask;
