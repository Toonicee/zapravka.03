import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Form, Input, Select, Button, message } from 'antd';

const { Option } = Select;

const WrapperForm = styled.div`
  max-width: ${props => (props.width ? '35%' : '500px')};
  width: 100%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #3f51b5;
  border-radius: 10px;

  @media screen and (max-width: 400px) {
    max-width: none;
    width: 95%;
  }

  .ant-form-item {
    display: flex;
    flex-direction: column;
    .ant-form-item-label {
      display: flex;
    }
  }

  .ant-row {
    margin-bottom: 15px;
  }
`;

const WrapperButton = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .form__btn {
    display: flex;
    align-items: center;
  }

  .callback {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }

  span {
    font-size: 18px;
    margin: 5px 0;
  }
`;

const validateMessages = {
  required: 'Поле обязательно для заполнения!',
};
const initialValues = {
  Name: '',
  PhoneNumber: '',
  Service: '',
};

const success = () => {
  message.success('Ваша заявка успешно отправлена');
};
const error = () => {
  message.error('Ошибка, повторите еще раз');
};
const MyForm = ({ width }) => {
  const [isLoading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async ({ Name, PhoneNumber, Service: { value } }) => {
    setLoading(true);
    await axios
      .post('https://formspree.io/xzbjeqlo', { Имя: Name, Номер: PhoneNumber, Услуга: value })
      .then(function(response) {
        success();
        form.resetFields();
      })
      .catch(function(error) {
        error();
      });

    setLoading(false);
  };
  return (
    <WrapperForm width={width}>
      <Form
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={initialValues}
      >
        <Form.Item name="Name" label="Ваше имя" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item name="PhoneNumber" label="Ваш номер" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item name="Service" label="Выберите услугу" rules={[{ required: true }]}>
          <Select size="large" labelInValue onChange={() => {}}>
            <Option value="Заправка Картриджа">Заправка картриджа</Option>
            <Option value="Ремонт принтера">Ремонт принтера</Option>
            <Option value="Консультация">Консультация</Option>
          </Select>
        </Form.Item>
        <WrapperButton>
          <Button className="form__btn" type="primary" htmlType="submit" loading={isLoading}>
            {isLoading ? 'Отправка' : 'Оставить заявку'}
          </Button>
          <span>или</span>
          <div className="callback">
            <a href="tel:+73012456457">Позвоните! </a>
            <span>оператору для моментальной связи</span>
          </div>
        </WrapperButton>
      </Form>
    </WrapperForm>
  );
};

export default MyForm;
