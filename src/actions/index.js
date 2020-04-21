import * as types from "./actionTypes";

export const setModalOpen = () => {
  return {
    type: types.SET_MODAL_OPEN,
    payload: true,
  };
};

export const setModalClose = () => {
  return {
    type: types.SET_MODAL_CLOSE,
    payload: false,
  };
};

export const setBuyCounter = () => {
  return {
    type: types.SET_BUY_COUNTER,
    payload: 1,
  };
};

// counter = (e) => {
//   this.setState((prevState) => ({
//     buyCounter: prevState.buyCounter + 1,
//   }));
//   console.log(this.state.buyCounter);
// };
