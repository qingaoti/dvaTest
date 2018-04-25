import key from 'keymaster';

export default {
  namespace: 'count',
  subscriptions: {
     keyboardWatcher({ dispatch }) {
       key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
     },
  },
  effects: {
    *add(action, { call, put }) {
        yield call(delay, 1000);
        yield put({ type: 'minus' });
      },
  },
  state: {
    record:0,
    current:0,
  },
  reducers: {
    add (state){
      let newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current:state.current + 1
      }
    },
    minus (state){
      return {
        ...state,
        current: state.current - 1
      };
    }
  },
};

function delay(timeout){
  return new Promise(resolve => {
      setTimeout(resolve, timeout);
  });
}
