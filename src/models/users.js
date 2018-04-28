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
    *handleMenuClick (e) {
      const { dispatch } = this.props;
      const { selectedRows } = this.state;

      if (!selectedRows) return;

      switch (e.key) {
        case 'remove':
          dispatch({
            type: 'rule/remove',
            payload: {
              no: selectedRows.map(row => row.no).join(','),
            },
            callback: () => {
              this.setState({
                selectedRows: [],
              });
            },
          });
          break;
        default:
          break;
      }
    },
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
