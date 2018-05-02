// import dva from 'dva';

export default {
  namespace: 'users',
  state: {
    modalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
  },
  effects: {

  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
