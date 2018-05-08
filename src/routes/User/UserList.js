import React from 'react';
import { connect } from 'dva';
import { Row, Col ,List, Card ,Input,Form ,Select,Icon, Button,InputNumber,DatePicker,Tooltip,Avatar,message ,Modal ,} from 'antd';
import styles from './List.css';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import reqwest from 'reqwest';

// const columns = [{
//   title: '城市',
//   dataIndex: 'name',
//   sorter: true,
//   render: (name,record) => `${record.zip} ${name} `,
//   width: '20%',
// }, {
//   title: '拼音',
//   dataIndex: 'pinyin',
//   width: '20%',
// }, {
//   title: '省会',
//   dataIndex: 'provName',
// }];

const CreateForm = Form.create()((props) => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };
  return (
    <Modal
      title="新增用户"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <Form.Item
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 15 }}
        label="姓名"
      >
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input some name...' }],
        })(
          <Input placeholder="请输入" />
        )}
      </Form.Item>
      <Form.Item
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 15 }}
        label="年龄"
      >
        {form.getFieldDecorator('age', {
          rules: [{ required: true, message: 'Please input some age...' }],
        })(
          <Input placeholder="请输入" />
        )}
      </Form.Item>
    </Modal>
  );
});

@Form.create()
class UserList extends React.Component  {
  state = {
    modalVisible: false,
    data: [],
    loading: false,
    expand: false,
  };

  componentDidMount() {
    this.fetch();
  }
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'api/users',
      method: 'get',
      headers:{'Content-Type':'application/json'},
      type: 'json',
    }).then((data) => {
      console.log('data:', data);
      this.setState({
        loading: false,
        data: data.data,
        pagination: data.data.length
      });
    });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleAdd = (fields) => {
    this.props.dispatch({
      type: 'rule/add',
      payload: {
        description: fields.desc,
      },
    });

    message.success('添加成功');
    this.setState({
      modalVisible: false,
    });
  };

  toggleForm = () => {
    this.setState({
      expand: !this.state.expand,
    });
  };

  renderSimpleForm() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <Form.Item label="规则编号">
              {getFieldDecorator('no')(
                <Input placeholder="请输入" />
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <Form.Item label="使用状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Select.Option value="0">关闭</Select.Option>
                  <Select.Option value="1">运行中</Select.Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit" onClick={() => this.handleModalVisible(true)}>新增</Button>
              <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit">查询</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderAdvancedForm() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <Form.Item label="规则编号">
              {getFieldDecorator('no')(
                <Input placeholder="请输入" />
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <Form.Item label="使用状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Select.Option value="0">关闭</Select.Option>
                  <Select.Option value="1">运行中</Select.Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <Form.Item label="调用次数">
              {getFieldDecorator('number')(
                <InputNumber style={{ width: '100%' }} />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <Form.Item label="更新日期">
              {getFieldDecorator('date')(
                <DatePicker style={{ width: '100%' }} placeholder="请输入更新日期" />
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <Form.Item label="使用状态">
              {getFieldDecorator('status3')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Select.Option value="0">关闭</Select.Option>
                  <Select.Option value="1">运行中</Select.Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <Form.Item label="使用状态">
              {getFieldDecorator('status4')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Select.Option value="0">关闭</Select.Option>
                  <Select.Option value="1">运行中</Select.Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <div style={{ overflow: 'hidden' }}>
          <span style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              收起 <Icon type="up" />
            </a>
          </span>
        </div>
      </Form>
    );
  }

  renderForm() {
    return this.state.expand ? this.renderAdvancedForm() : this.renderSimpleForm();
  }

  render() {
    const {  modalVisible } = this.state;
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };

    return (
      <PageHeaderLayout title="demo 查询表格">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              {this.renderForm()}
            </div>

            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              loading={this.state.loading}
              renderItem={item => (
                <List.Item key={item._id}>
                  <Card
                    hoverable
                    actions={[
                      <Tooltip title="通话"><Icon type="mobile" /></Tooltip>,
                      <Tooltip title="编辑"><Icon type="edit" /></Tooltip>,
                      <Tooltip title="分享"><Icon type="share-alt" /></Tooltip>
                    ]}
                  >
                    <Card.Meta
                      avatar={<Avatar size="large" src={item.head_img} />}
                      title= {item.name + "  Level:"+ item.age}
                    />
                    DPS:{item.star}
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </Card>
        <CreateForm
          {...parentMethods}
          modalVisible={modalVisible}
        />
      </PageHeaderLayout>
    );
  }
}

export default connect(({ users }) => ({
  users
}))(UserList);
