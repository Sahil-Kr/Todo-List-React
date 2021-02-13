import React, { useEffect, useState } from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  const [editActive, setEditActive] = useState(false);
  const [content, setContent] = useState(props.task.content);

  const saveClickHandler = () => {
    if (!content) return;
    setEditActive(false);
    const updatedTask = {
      content: content,
    };
    props.updateTask(props.task, updatedTask);
  };

  const deleteTaskHandler = () => {
    props.deleteTask(props.task);
  };

  return (
    <div className={classes.Item + " list"}>
      {!editActive ? (
        <p className={classes.Content}>{props.task.content}</p>
      ) : (
        <textarea
          className="editTask"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      )}
      <div className={classes.Btns}>
        {editActive ? (
          <button className="saveTask" onClick={saveClickHandler}>
            SAVE
          </button>
        ) : (
          <button onClick={() => setEditActive(true)}>EDIT</button>
        )}
        <button onClick={deleteTaskHandler}>DELETE</button>
      </div>
    </div>
  );
};

export default Item;
