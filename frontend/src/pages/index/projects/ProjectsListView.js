import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const ProjectsListView = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/").then((res) => {
            setProjects(res.data);
            console.log(res.data);
        });
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/${id}`)
            .then((res) => console.log("deleted res", res))
            .catch((err) => console.error("faild to delete", err));
    };

    return (
        <List
            itemLayout="horizontal"
            dataSource={projects}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta title={<Link to={`/projects/${item.id}`}>{item.title}</Link>} description={item.content} />
                    <Button type="danger" onClick={() => handleDelete(item.id)}>
                        delete
                    </Button>
                </List.Item>
            )}
        />
    );
};

export default ProjectsListView;
