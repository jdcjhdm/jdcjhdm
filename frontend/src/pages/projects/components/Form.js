import React from "react";
import { Form, Input, Button } from "antd";

const ProjectForm = () => {
    const [form] = Form.useForm();

    const handleCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log("Success:", values);
        } catch (errorInfo) {
            console.log("Failed:", errorInfo);
        }
    };

    return (
        <Form form={form} name="dynamic_rule">
            <Form.Item label="Title" rules={[{ required: true, message: "Enter a title" }]}>
                <Input placeholder="Enter a title" />
            </Form.Item>
            <Form.Item label="Content" rules={[{ required: true, message: "Enter some content" }]}>
                <Input placeholder="Enter some content" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={handleCheck}>
                    Check
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProjectForm;
