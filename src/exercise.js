import { createStore } from "redux";

// 리덕스에서 관리 할 상태 정의
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션 타입 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션 생성함수
function increase() {
  return {
    type: INCREASE,
  };
}

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// 위 액션 생성함수들을 통해 만들어진
function reducer(state = initialState, action) {
  // state 초깃값을 initialState
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// console.log("현재 스토어에 들어있는 상태", store.getState());

const listener = () => {
  const state = store.getState();
  // console.log("스토어에 들어 있는 상태가 바뀔 때", state);
};

const unsubscribe = store.subscribe(listener);
// subscribe 해제시 (??)

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText(["안녕", "잘가"]));
store.dispatch(addToList({ id: 1, text: "wow" }));

const exercise = () => {
  return (
    <>
      <h1>exercise</h1>
    </>
  );
};

export default exercise;
