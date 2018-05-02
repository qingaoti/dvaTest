// import React, {  Fragment } from 'react';
// import { Card, Icon, Button, Dropdown, Menu ,Badge, Divider} from 'antd';
// import moment from 'moment';
// import { connect } from 'dva';
//
// import PageHeaderLayout from '../../layouts/PageHeaderLayout';
// import StandardTable from '../../components/StandardTable';
// import styles from './TableList.less';
//
// const statusMap = ['default', 'processing', 'success', 'error'];
// const status = ['关闭', '运行中', '已上线', '异常'];
// const columns = [
//   {
//     title: '规则编号',
//     dataIndex: 'no',
//   },
//   {
//     title: '描述',
//     dataIndex: 'description',
//   },
//   {
//     title: '服务调用次数',
//     dataIndex: 'callNo',
//     sorter: true,
//     align: 'right',
//     render: val => `${val} 万`,
//     // mark to display a total number
//     needTotal: true,
//   },
//   {
//     title: '状态',
//     dataIndex: 'status',
//     filters: [
//       {
//         text: status[0],
//         value: 0,
//       },
//       {
//         text: status[1],
//         value: 1,
//       },
//       {
//         text: status[2],
//         value: 2,
//       },
//       {
//         text: status[3],
//         value: 3,
//       },
//     ],
//     render(val) {
//       return <Badge status={statusMap[val]} text={status[val]} />;
//     },
//   },
//   {
//     title: '更新时间',
//     dataIndex: 'updatedAt',
//     sorter: true,
//     render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
//   },
//   {
//     title: '操作',
//     render: () => (
//       <Fragment>
//         <a href="">配置</a>
//         <Divider type="vertical" />
//         <a href="">订阅警报</a>
//       </Fragment>
//     ),
//   },
// ];
//
// const UserList = ({ dispatch, users }) => {
//
//   const { rule: { data }, loading } = this.props;
//   const { selectedRows, modalVisible } = this.state;
//
//   const menu = (
//     <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
//       <Menu.Item key="remove">删除</Menu.Item>
//       <Menu.Item key="approval">批量审批</Menu.Item>
//     </Menu>
//   );
//
//   const parentMethods = {
//     handleAdd: this.handleAdd,
//     handleModalVisible: this.handleModalVisible,
//   };
//
//   return (
//     <div>
//       <PageHeaderLayout title="用户列表">
//         <Card bordered={false}>
//           <div className={styles.tableList}>
//             <div className={styles.tableListForm}>
//               {this.renderForm()}
//             </div>
//             <div className={styles.tableListOperator}>
//               <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
//                 新建
//               </Button>
//               {
//                 selectedRows.length > 0 && (
//                   <span>
//                     <Button>批量操作</Button>
//                     <Dropdown overlay={menu}>
//                       <Button>
//                         更多操作 <Icon type="down" />
//                       </Button>
//                     </Dropdown>
//                   </span>
//                 )
//               }
//             </div>
//             <StandardTable
//               selectedRows={selectedRows}
//               loading={loading}
//               data={data}
//               columns={columns}
//               onSelectRow={this.handleSelectRows}
//               onChange={this.handleStandardTableChange}
//             />
//           </div>
//         </Card>
//       </PageHeaderLayout>
//     </div>
//   );
// };
//
// export default connect(({ users }) => ({
//   users,
// }))(UserList);
