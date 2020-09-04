import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";

const ProjectDetialView = (props) => {
    const projectID = props.match.params.projectID;
    const [project, setProject] = useState({});
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${projectID}`).then((res) => {
            setProject(res.data);
            console.log("project", res.data);
        });
    }, []);
    return (
        <Card title={project.title}>
            <p>{project.content}</p>
        </Card>
    );
};

export default ProjectDetialView;
