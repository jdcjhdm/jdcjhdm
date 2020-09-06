import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const ProjectForm = () => {
    useEffect(() => {
        console.log("FORM");
    }, []);

    const handleFormSubmit = (values) => {
        axios
            .post("http://127.0.0.1:8000/api/", {
                title: values.title,
                content: values.content,
            })
            .then((res) => console.log("post resonse", res))
            .catch((err) => console.error("post error", err));
        console.log("Success", values.title);
    };

    return (
        <Form onFinish={handleFormSubmit}>
            <Form.Item label="Title" name="title" rules={[{ required: true, message: "Enter a title" }]}>
                <Input placeholder="Enter a title" />
            </Form.Item>
            <Form.Item label="Content" name="content" rules={[{ required: true, message: "Enter some content" }]}>
                <Input placeholder="Enter some content" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProjectForm;
