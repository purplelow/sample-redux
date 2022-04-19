import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import Exercise from "./exercise";

const App = () => {
  return (
    <>
      {/* <Exercise /> */}
      <hr />
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
};

export default App;
