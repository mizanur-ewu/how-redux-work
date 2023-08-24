import { DECREMENT, INCREMENT } from "./actionType"

const initialState={
  value:10,
}


const counterReducer=(state=initialState, action)=>{
  switch(action.type){
    case INCREMENT:
      return{
        ...state,
        value:state.value+action.payload

      }
      case DECREMENT:
        return{
          ...state,
          value:state.value-action.payload
        }
      default:
        return state;
  }
}
export default counterReducer;










// import { DECREMENT, INCREMENT } from "./actionType";

// const initialState = {
//   value: 0,
// };
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         value: state.value + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         value: state.value - 1,
//       };
//     default:
//       return state;
//   }
// };
// export default counterReducer;
