import { Button, Form, Input, Typography } from "antd";
const { Title } = Typography;
const LoginForm = (props = { closeModal: () => {} }) => {
  const onFinish = (values) => {
    alert(`Inició de Sesión: ` + JSON.stringify(values, null, 2));
    // eslint-disable-next-line react/prop-types
    props?.closeModal();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={3} className="text-center">
        Iniciar Sesión
      </Title>

      <Form.Item
        label="Nombre del usuario"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <div className="w-full flex justify-center">
          <Button type="primary" htmlType="submit" className="bg-yellow-400 text-blue-700 border-0 hover:bg-yellow-500 transition min-w-[120px]">
            Enviar
          </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
