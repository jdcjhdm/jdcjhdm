import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

const ProjectForm = () => {
    useEffect(() => {
        console.log("FORM");
    }, []);
    return (
        <Form>
            <Form.Item label="Title" rules={[{ required: true, message: "Enter a title" }]}>
                <Input placeholder="Enter a title" />
            </Form.Item>
            <Form.Item label="Content" rules={[{ required: true, message: "Enter some content" }]}>
                <Input placeholder="Enter some content" />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Check</Button>
            </Form.Item>
        </Form>
    );
};

export default ProjectForm;
