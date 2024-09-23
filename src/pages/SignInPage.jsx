import React, {useState} from 'react';
import Model from "../components/common/model/model.jsx";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase.js";
import {Button, Checkbox, Divider, Flex, Form, Input} from "antd";
import {FacebookFilled, GoogleOutlined, LockOutlined, UserOutlined} from "@ant-design/icons";

const SignInPage = ({ isOpenSigninForm, setIsOpenSignForm }) => {
    // const [showLoginForm,setShowLoginForm] = useState(true);
    const onSignUp = (values) => {
        console.log('Received values of form: ', values);
        createUserWithEmailAndPassword (auth,values.email,values.password).then((userCredentials)=>{
            const user = userCredentials.user;
            console.log(user)
            setIsOpenSignForm(false);
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode);
        })
    };

    return (
        <>
            <Model isModalOpen = {isOpenSigninForm} setIsModalOpen={setIsOpenSignForm} title="Create your Signet Account">
                <Form
                    name="Sign Up"
                    initialValues={{ remember: true }}
                    style={{ maxWidth: '100%',alignItems:'center', padding:'10px', marginTop:'20px'}}
                    onFinish={onSignUp}
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
                        <Button block className="text-[#FFFFFF] font-bold text-[16px] h-10 font-mainTextStyle h-[32px] flex items-center justify-center w-[95px] rounded-[7px] bg-[#000000]" htmlType="submit">
                            Sign Up
                        </Button>
                        {/*or <a href="">Register now!</a>*/}
                    </Form.Item>
                    <Divider
                        style={{
                            borderColor: '#d2d2d5',
                        }}
                    >
                        Or, sign up with
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

export default SignInPage;
