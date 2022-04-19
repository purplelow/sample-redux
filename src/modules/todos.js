// 액션 타입 선언
const ADD_TODO = "todos/ADD_TODO";
const TOGLE_TODO = "todos/TOGLE_TOD";

// 액션 생성함수 선언
let nextId = 1; // to do 데이터에서 사용 할 고유 id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const toggleToDo = (id) => ({
  type: TOGLE_TODO,
  id,
});

// 초기 상태 선언
// 리듀서의 초기 상태는 객체, 배열, 원시타입 무엇이든 상관이 없다.
const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, done: !todo.done } // done 값을 반전
          : todo
      );
    default:
      return state;
  }
}
