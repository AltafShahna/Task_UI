import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, index }) => {
  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit", task.id);
  };

  const handleDelete = () => {
    // Implement delete functionality
    console.log("Delete", task.id);
  };

  const handleViewDetails = () => {
    // Implement view details functionality
    console.log("View Details", task.id);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
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
              <Typography variant="h6">{task.title}</Typography>
              <Typography color="textSecondary">{task.description}</Typography>
              <Typography variant="body2" color="textSecondary">
                Created at: {task.createdAt}
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
