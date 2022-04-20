import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/counter";

const CounterContainer = () => {
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

// mapStateToProps는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props로 넣어줄지 정의한다.
// 현재 리덕스 상태를 파라미터로 받아온다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state,
  couter,
  diff,
});

// mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어준다.
// dispatch를 파라미터로 받아온다.
// const mapDispatchToProps = (dispatch) => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: (diff) => dispatch(setDiff(diff)),
// });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increase,
      decrease,
      setDiff,
    },
    dispatch
  );

// connect 함수에는 mapStateToProps, mapDispatchToProps를 인자로 넣는다.
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
