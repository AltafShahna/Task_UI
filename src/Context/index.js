import { createContext, useContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";

const Data = createContext();

function reducer(state, action) {
  let stateL = state;
  switch (action.type) {
    case "setTaskData": {
      stateL = { ...state, taskData: action.value };
      return stateL;
    }
    case "setInputData": {
      stateL = { ...state, inputData: action.value };
      return stateL;
    }
    default: {
      return state;
    }
  }
}

function DataControllerProvider({ children }) {
  const initialState = {
    taskData: [],
    inputData: {
      taskInput: "",
      descriptionInput: "",
    },
  };
  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <Data.Provider value={value}>{children}</Data.Provider>;
}

function useDataController() {
  const context = useContext(Data);

  if (!context) {
    throw new Error(
      "useDataController should be used inside the dataController."
    );
  }
  return context;
}
DataControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const setTaskData = (dispatch, value) =>
  dispatch({ type: "setTaskData", value });
const setInputData = (dispatch, value) =>
  dispatch({ type: "setInputData", value });

export { DataControllerProvider, useDataController, setTaskData, setInputData };
