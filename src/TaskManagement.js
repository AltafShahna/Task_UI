import React from "react";
import { Grid2, Button, TextField, Box } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { useDataController, setTaskData, setInputData } from "./Context";
// import Swal from "sweetalert2";

const TaskManagement = () => {
  const [controller, dispatch] = useDataController();
  const { taskData, inputData } = controller;
  const TaskData = taskData;
  const InputData = inputData;

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
  // const [taskInput, setTaskInput] = useState("");
  // const [descriptionInput, setDescriptionInput] = useState("");

  const onhandleChange = (e) => {
    InputData[e.target.name] = e.target.value;
    setInputData(dispatch, InputData);
  };

  const addTask = () => {
    const newTask = {
      id: (TaskData.length + 1).toString(),
      title: InputData.taskInput,
      description: InputData.descriptionInput,
      status: "TODO",
      createdAt: new Date().toLocaleString(),
      updatedData: [],
    };

    setTaskData(dispatch, [...TaskData, newTask]);
    // setTasks([...TaskData, newTask]);
    setInputData(dispatch, {
      taskInput: "",
      descriptionInput: "",
    });
    // setTaskInput("");
    // setDescriptionInput("");
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    // If the item is dropped outside the allowed area or in the same position
    // if (source.droppableId === "DONE") {
    //   Swal.fire({
    //     icon: "error",
    //     text: "You Connot Change the Status once its DONE using Drag and Drop.",
    //   });
    // }
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
      // || source.droppableId === "DONE"
    ) {
      return;
    }
    const updatedTasks = [...TaskData];
    const draggedTask = updatedTasks.find((task) => task.id === draggableId);

    // Update the status of the dragged task based on the column it was dropped in
    if (draggedTask) {
      draggedTask.updatedData.push({
        Taskdate: new Date(),
        status: source.droppableId,
      });

      draggedTask.status = destination.droppableId;
      // console.log("Altaf", draggedTask);
    }
    setTaskData(dispatch, updatedTasks);
    // setTasks(dispatch, updatedTasks);
  };
  // console.log("DAta", TaskData);
  // useEffect((dispatch) => {
  //   // const Data =
  //   // {};
  //   setTasks(dispatch, {});
  // }, []);

  return (
    <div>
      <Box>
        <Grid2 container spacing={2} p={2}>
          <TextField
            size="small"
            label="Task Name"
            variant="outlined"
            name="taskInput"
            value={InputData.taskInput}
            onChange={(e) => onhandleChange(e)}
          />
          <TextField
            size="small"
            label="Task Description"
            variant="outlined"
            name="descriptionInput"
            value={InputData.descriptionInput}
            onChange={(e) => onhandleChange(e)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addTask}
            size="small"
          >
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
