import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import { Button } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ProjectDetialView = (props) => {
    const projectID = props.match.params.projectID;
    const [project, setProject] = useState({});
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${projectID}`).then((res) => {
            setProject(res.data);
        });
        console.log("DETAILVIEW props.match", props.match);
        console.log("DETAILVIEW projectID", projectID);
    }, [projectID, props.match]);
    return (
        <React.Fragment>
            <Card title={project.title}>
                <p>{project.content}</p>
            </Card>
            <br />
            <Link to="/projects">
                <Button type="primary" icon={<StepBackwardOutlined />} size="large" />
            </Link>
        </React.Fragment>
    );
};

export default ProjectDetialView;
