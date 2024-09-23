import React, {useState} from 'react';
import Model from "../components/common/model/model.jsx";
import {Button, Checkbox, Divider, Flex, Form, Input} from "antd";
import {UserOutlined, LockOutlined, GoogleOutlined, FacebookFilled} from "@ant-design/icons";
import FbIcon from '../assets/FBIcon.svg';
import {auth} from "../firebase.js";
import {createUserWithEmailAndPassword} from  "firebase/auth"

const LoginPage = ({isOpenLoginForm, setIsOpenLoginForm }) => {
    // const [showLoginForm,setShowLoginForm] = useState(true);
    const onLogin = (values) => {
        console.log('Received values of form: ', values);

    };

    return (
        <>
          <Model isModalOpen = {isOpenLoginForm} setIsModalOpen={setIsOpenLoginForm} title="Welcome to Signet! Please login.">
              <Form
                  name="login"
                  initialValues={{ remember: true }}
                  style={{ maxWidth: '100%',alignItems:'center', padding:'10px', marginTop:'20px' }}
                  onFinish={onLogin}
              >
                  <Form.Item
                      name="email"
                      rules={[{ required: true, message: 'Please input your Username!' }]}
                  >
                      <Input prefix={<UserOutlined />} placeholder="Email or Phone Number " />
                  </Form.Item>
                  <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                      <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                  </Form.Item>
                  <Form.Item>
                      <Flex justify="space-between" align="center">
                          <Form.Item name="remember" valuePropName="checked" noStyle>
                              <Checkbox  className="">Remember me</Checkbox>
                          </Form.Item>
                          <a href="">Forgot password</a>
                      </Flex>
                  </Form.Item>

                  <Form.Item>
                      <Button block className="text-[#FFFFFF] font-bold text-[16px] h-10 font-mainTextStyle h-[32px] flex items-center justify-center w-[95px] rounded-[7px] bg-[#000000]" htmlType="submit">
                          Log in
                      </Button>
                      {/*or <a href="">Register now!</a>*/}
                  </Form.Item>
                  <Divider
                      style={{
                          borderColor: '#d2d2d5',
                      }}
                  >
                      Or, login with
                  </Divider>
                  <Form.Item>
                      <Flex justify='space-between' align='center'>
                          <Button className="w-[220px] bg-[#D9D9D9]">
                              <FacebookFilled style={{color:"blue"}} /> facebook
                          </Button>
                          <Button className="w-[220px]  bg-[#D9D9D9]">
                              <GoogleOutlined style={{color:'#bb5d5d'}} /> Google
                          </Button>
                      </Flex>
                  </Form.Item>
              </Form>
          </Model>
        </>
    )
}

export default LoginPage;
