import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/counter";

const CounterContainer = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  // state의 값은 store.getState() 함수를 호출했을 떄 나타나는 결과물과 동일하다.
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

  // 최적화 ========================= 1
  // const { number, diff } = useSelector(
  //   (state) => ({
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   }),
  //   shallowEqual
  // );

  // 최적화 ========================= 2
  // const number = useSelector(state => state.counter.number);
  // const diff = useSelector(state => state.counter.diff);

  // 최적화 ========================= 3
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    (prev, next) => {
      return prev.number === next.number && prev.diff === next.diff;
    }
  );

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook 이다.
  const dispatch = useDispatch();

  // 각 액션들을 디스패치하는 함수들을 만든다.
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태,
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어준다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
