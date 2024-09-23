import React, {useState} from 'react';
import {Button, Modal} from "antd";

const Model = ({ children, isModalOpen, setIsModalOpen, title}) => {
    // const [isModalOpen, setIsModalOpen] = useState(openModel);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const handleOk = () =>{
        setIsModalOpen(false);
    }

    return(
        <>
            <Modal title={title} open={isModalOpen} onOk={handleOk} footer={null}
                   onCancel={handleCancel}
            >
                {children}
            </Modal>
        </>
    )
}

export default Model;
