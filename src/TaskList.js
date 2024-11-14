import React from "react";
import { Grid2, Box, Typography } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, status }) => {
  return (
    <Grid2 item xs={4}>
      <Box sx={{ bgcolor: "#4F75FF", p: 1 }}>
        <Typography sx={{ variant: "h6", color: "#fff" }}>{status}</Typography>
      </Box>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ minHeight: "100px" }}
          >
            {tasks
              .filter((task) => task.status === status)
              .map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Grid2>
  );
};

export default TaskList;
