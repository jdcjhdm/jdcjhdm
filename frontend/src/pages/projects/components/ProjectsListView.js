import React, { useState, useEffect } from "react";
import { List } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const ProjectsListView = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/").then((res) => {
            setProjects(res.data);
            console.log(res.data);
        });
    }, []);
    return (
        <List
            itemLayout="horizontal"
            dataSource={projects}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta title={<Link to={`/${item.id}`}>{item.title}</Link>} description={item.content} />
                </List.Item>
            )}
        />
    );
};

export default ProjectsListView;
