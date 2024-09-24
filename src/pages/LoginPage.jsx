import React, {useState} from 'react';
import Model from "../components/common/model/model.jsx";
import {Button, Checkbox, Divider, Flex, Form, Input, Spin} from "antd";
import {UserOutlined, LockOutlined, GoogleOutlined, FacebookFilled, LoadingOutlined} from "@ant-design/icons";
import FbIcon from '../assets/FBIcon.svg';
import {auth} from "../firebase.js";

import {signInWithEmailAndPassword} from "firebase/auth"

const LoginPage = ({isOpenLoginForm, setIsOpenLoginForm }) => {
    // const [showLoginForm,setShowLoginForm] = useState(true);
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const onLogin = (values) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth,values.email,values.password).then((user)=>{
            console.log(user)
            setIsLoading(false);
            setIsOpenLoginForm(false);
        }).catch((error)=>{
            setIsLoading(false);
            setError("Invalid email or password");
        })

    };

    return (
        <>
          <Model isModalOpen = {isOpenLoginForm} setIsModalOpen={setIsOpenLoginForm} title="Welcome to Signet! Please login.">
           <div className="mt-7">
               {error && <p className="text-[#dc2626] px-3 ">{error}</p>}
               <Form
                   name="login"
                   initialValues={{ remember: true }}
                   style={{ maxWidth: '100%',alignItems:'center', padding:'10px' }}
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
                           borderColor: '#D9D9D9',
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
           </div>
              {isLoading && <div style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
                  <Spin indicator={<LoadingOutlined style={{color:'#737171'}} spin />} />
              </div> }
          </Model>
        </>
    )
}

export default LoginPage;
