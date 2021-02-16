import React, { useState } from "react";
import classes from "./Layout.module.css";
import CreateTask from "../components/CreateTask/CreateTask";
import ListItems from "../components/ListItems/ListItems";

const Layout = () => {
  const [taskList, setTaskList] = useState([]);

  const addTaskToListHandler = (task) => {
    const list = taskList.slice(0);
    // task.index = list.length;
    // console.log(task);
    list.push(task);
    setTaskList(list);
  };

  const updateTaskHandler = (oldTask, updatedTask) => {
    const list = taskList.slice(0);
    let updateIndex;
    list.forEach((task, index) => {
      if (task === oldTask) updateIndex = index;
    });
    list[updateIndex].content = updatedTask.content;
    setTaskList(list);
    // console.log(oldTask);
  };

  const deleteTaskHandler = (oldTask) => {
    const list = taskList.slice(0);
    let updateIndex;
    list.forEach((task, index) => {
      if (task === oldTask) updateIndex = index;
    });
    list.splice(updateIndex, 1);
    setTaskList(list);
  };

  return (
    <div className={classes.Layout}>
      <CreateTask addTaskToList={addTaskToListHandler} />
      <ListItems
        taskList={taskList}
        updateTask={updateTaskHandler}
        deleteTask={deleteTaskHandler}
      />
    </div>
  );
};

export default Layout;
