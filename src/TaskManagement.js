import React, { useState } from "react";
import { Grid2, Button, TextField, Box } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { useDataController, setTaskData } from "./Context";

const TaskManagement = () => {
  const [controller, dispatch] = useDataController();
  const { taskData } = controller;
  const TaskData = taskData;

  // const [TaskData, setTasks] = useState([
  //   // {
  //   //   id: "1",
  //   //   title: "Task 1",
  //   //   description: "Description 1",
  //   //   status: "TODO",
  //   //   createdAt: new Date().toLocaleString(),
  //   // },
  //   // {
  //   //   id: 2,
  //   //   title: "Task 2",
  //   //   description: "Description 2",
  //   //   status: "TODO",
  //   //   createdAt: new Date().toLocaleString(),
  //   // },
  //   // {
  //   //   id: 3,
  //   //   title: "Task 3",
  //   //   description: "Description 3",
  //   //   status: "IN PROGRESS",
  //   //   createdAt: new Date().toLocaleString(),
  //   // },
  //   // {
  //   //   id: 4,
  //   //   title: "Task 4",
  //   //   description: "Description 4",
  //   //   status: "DONE",
  //   //   createdAt: new Date().toLocaleString(),
  //   // },
  // ]);
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const addTask = () => {
    const newTask = {
      id: (TaskData.length + 1).toString(),
      title: taskInput,
      description: descriptionInput,
      status: "TODO",
      createdAt: new Date().toLocaleString(),
    };

    setTaskData(dispatch, [...TaskData, newTask]);
    // setTasks([...TaskData, newTask]);
    setTaskInput("");
    setDescriptionInput("");
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If the item is dropped outside the allowed area or in the same position
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const updatedTasks = [...TaskData];
    const draggedTask = updatedTasks.find((task) => task.id === draggableId);

    // Update the status of the dragged task based on the column it was dropped in
    if (draggedTask) {
      draggedTask.status = destination.droppableId;
    }
    setTaskData(dispatch, updatedTasks);
    // setTasks(dispatch, updatedTasks);
  };

  // useEffect((dispatch) => {
  //   // const Data =
  //   // {};
  //   setTasks(dispatch, {});
  // }, []);

  return (
    <div>
      <Box>
        <Grid2 container spacing={2} p={2}>
          {/* <div style={{ margin: "20px 0" }}> */}
          <TextField
            label="Task"
            variant="outlined"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            // style={{ marginRight: "10px" }}
          />
          <TextField
            label="Description"
            variant="outlined"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <Button variant="contained" color="primary" onClick={addTask}>
            Add Task
          </Button>
        </Grid2>
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid2 container spacing={2} p={2}>
            <Grid2
              size={{
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 4,
              }}
            >
              <TaskList status="TODO" />
            </Grid2>
            <Grid2
              size={{
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 4,
              }}
            >
              <TaskList status="IN PROGRESS" />
            </Grid2>
            <Grid2
              size={{
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 4,
              }}
            >
              <TaskList status="DONE" />
            </Grid2>
          </Grid2>
        </DragDropContext>
      </Box>
    </div>
  );
};

export default TaskManagement;
