import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleToDo } from "../modules/todos";

function TodosContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없다.
  // 한 종류의 값만 조회하고 싶으면, 원하는 값만 바로 반환하면 된다.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback(
    (id) => {
      dispatch(toggleToDo(id));
    },
    [dispatch]
  );
  // 최적화를 위해 useCallback 사용

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
