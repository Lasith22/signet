import React, {useContext, useEffect, useState} from 'react';
import Model from "../components/common/model/model.jsx";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase.js";
import {Alert, Button, Checkbox, Divider, Flex, Form, Input, Spin} from "antd";
import {FacebookFilled, GoogleOutlined, LoadingOutlined, LockOutlined, UserOutlined} from "@ant-design/icons";
import AuthContextProvider, {AuthContext} from "../store/authContext.jsx";

const SignInPage = ({ isOpenSigninForm, setIsOpenSignForm }) => {
    // const [showLoginForm,setShowLoginForm] = useState(true);
    const [isLoading,setIsLoading] = useState(false);
    const {signUp,status, message} = useContext(AuthContext)

    const onSignUp = (values) => {
        setIsLoading(true);
        signUp(auth,values.email,values.password,setIsOpenSignForm);
    };

    useEffect(()=>{
        if(status != 0){
            setIsLoading(false);
        }
    },[status])

    return (
        <>
            <Model isModalOpen = {isOpenSigninForm} setIsModalOpen={setIsOpenSignForm} title="Create your Signet Account">
                <div className="mt-7">
                {status !== 200 && <p className="text-[#dc2626] px-3 ">{message}</p>}
                <Form
                    name="Sign Up"
                    initialValues={{ remember: true }}
                    style={{ maxWidth: '100%',alignItems:'center', padding:'10px'}}
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
                            borderColor: '#D9D9D9',
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
                {isLoading && <div style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
                    <Spin indicator={<LoadingOutlined style={{color:'#737171'}} spin />} />
                </div> }
                    </div>
            </Model>
        </>
    )
}

export default SignInPage;
