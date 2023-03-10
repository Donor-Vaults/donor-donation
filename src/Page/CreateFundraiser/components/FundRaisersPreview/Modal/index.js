import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

const IsModal = () => {
  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: 'Accept',
      cancelText: 'Don’t Accept',
    });
  };
  return (
    <div style={{margin:'8rem 0 0 0'}}>
      <Space>
        <Button onClick={confirm}>Confirm</Button>
      </Space>
      {contextHolder}
    </div>
  );
};
export default IsModal;