import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { useDataController, setTaskData } from "./Context";

const TaskCard = ({ taskData2, index }) => {
  const [controller, dispatch] = useDataController();
  const { taskData } = controller;
  // console.log("indexindex", index, taskData2, taskData2);
  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit", taskData2.id, taskData2);
    setTaskData(dispatch, taskData);
  };

  const handleDelete = () => {
    // Implement delete functionality
    console.log("Delete", taskData2.id, taskData2, index);
  };

  const handleViewDetails = () => {
    // Implement view details functionality
    console.log("View Details", taskData2.id);
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
          <Card style={{ marginBottom: "10px" }}>
            <CardContent>
              <Typography variant="h6">{taskData2.title}</Typography>
              <Typography color="textSecondary">
                {taskData2.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Created at: {taskData2.createdAt}
              </Typography>
              <Button onClick={handleEdit}>Edit</Button>
              <Button onClick={handleDelete}>Delete</Button>
              <Button onClick={handleViewDetails}>View Details</Button>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
