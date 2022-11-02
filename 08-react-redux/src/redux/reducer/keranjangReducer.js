import {
  INCREMENT_KERANJANG,
  DECREMENT_KERANJANG,
} from "../action/keranjangAction";

const initialState = {
  totalKeranjang: 0,
};

function keranjangReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case INCREMENT_KERANJANG: 
      return {
        totalKeranjang: state.totalKeranjang + 1
      }
    case DECREMENT_KERANJANG: 
      return {
        totalKeranjang: state.totalKeranjang - 1
      } 
    default:
      return state;
  }
}

export default keranjangReducer;
