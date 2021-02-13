import React from "react";
import classes from "./ListItems.module.css";
import Item from "./Item/Item";

const ListItems = (props) => {
  const taskList = props.taskList.map((task, index) => {
    return (
      <Item
        key={index + task.content}
        task={task}
        updateTask={props.updateTask}
        deleteTask={props.deleteTask}
      />
    );
  });
  return <div className={classes.ListItems}>{taskList}</div>;
};

export default ListItems;
