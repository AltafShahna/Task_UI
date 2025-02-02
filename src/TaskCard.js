import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { useDataController, setTaskData, setInputData } from "./Context";
import Swal from "sweetalert2";

const TaskCard = ({ taskData2, index }) => {
  const [controller, dispatch] = useDataController();
  const { taskData, inputData } = controller;
  const InputData = inputData;
  // console.log("indexindex", index, taskData2, taskData2);
  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit", taskData2.id, taskData2);
    InputData.descriptionInput = taskData2.description;
    InputData.taskInput = taskData2.title;
    setInputData(dispatch, InputData);
    const TaskData = taskData.filter((x) => x.id !== taskData2.id);
    setTaskData(dispatch, TaskData);
  };

  const handleDelete = () => {
    // Implement delete functionality
    Swal.fire({
      icon: "warning",
      text: "Are you Sure you want Delete.",
      confirmButtonColor: "#b22222",
      confirmButtonText: "Yes,Delete it.",
      showConfirmButton: true,
      showCloseButton: true,
    }).then((x) => {
      if (x.isConfirmed === true) {
        const TaskData = taskData.filter((x) => x.id !== taskData2.id);
        setTaskData(dispatch, TaskData);
      }
    });

    console.log("Delete", taskData2.id, taskData2, index);
  };

  const handleViewDetails = () => {
    // Implement view details functionality
    Swal.fire({
      title: "Task Details",
      html: `<div style="text-align:left;"><table style="width:100%"><b><div>Title :</b> ${taskData2.title}</div><br>
      <div><b>Description : </b>${taskData2.description}</div><br><br>
        <div><b>Created at: </b>${taskData2.createdAt}</div>
      </div>
      `,
      confirmButtonColor: "#4F75FF",
      confirmButtonText: "Close",
    });
    // console.log("View Details", taskData2.id);
  };

  return (
    <Draggable draggableId={taskData2.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            ...provided.draggableProps.style,
            marginBottom: "10px",
          }}
        >
          <Card style={{ marginBottom: "7px" }}>
            <CardContent>
              <Typography variant="h6">{taskData2.title}</Typography>
              <Typography color="textSecondary">
                {taskData2.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Created at: {taskData2.createdAt}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "right" }}>
                <Stack direction="row" spacing={1}>
                  <Button onClick={handleEdit} variant="contained">
                    Edit
                  </Button>
                  <Button
                    onClick={handleDelete}
                    color="error"
                    variant="contained"
                  >
                    Delete
                  </Button>
                  <Button onClick={handleViewDetails} variant="contained">
                    View Details
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
