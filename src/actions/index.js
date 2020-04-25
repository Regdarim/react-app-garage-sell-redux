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

export const addNewItem = (e) => {
  e.preventDefault();
  const newGarageItem = {
    title: e.target.title.value,
    desc: e.target.desc.value,
    image: e.target.itemImage.value,
    price: e.target.price.value,
    id: 10,
  };
  return {
    type: types.ADD_NEW_ITEM,
    payload: newGarageItem,
  };
};

// addItem = (e) => {
//   e.preventDefault();

//   const newGarageItem = {
//     title: e.target.title.value,
//     desc: e.target.desc.value,
//     image: e.target.itemImage.value,
//     price: e.target.price.value,
//     id: this.state.garageItems.length + 1,
//   };
