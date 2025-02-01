import React from "react";
import { Grid2, Box, Typography } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { useDataController } from "./Context";

const TaskList = ({ status }) => {
  const [controller] = useDataController();
  const { taskData } = controller;
  // console.log("taskstasks", taskData, status);
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
            {taskData
              .filter((taskData1) => taskData1.status === status)
              .map((taskData2, index) => (
                <TaskCard
                  key={taskData2.id}
                  taskData2={taskData2}
                  index={index}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Grid2>
  );
};

export default TaskList;
