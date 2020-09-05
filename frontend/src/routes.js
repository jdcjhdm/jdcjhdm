import React from "react";
import { Route } from "react-router-dom";
import ProjectsListView from "./pages/projects/components/ProjectsListView";
import ProjectDetailView from "./pages/projects/components/ProjectDetailView";
import Form from "./pages/projects/components/Form";

const BaseRouter = () => (
    <div>
        <Route exact path="/home" component={ProjectsListView} />
        <Route exact path="/:projectID" component={ProjectDetailView} />
        <Route exact path="/add" component={Form} />
    </div>
);

export default BaseRouter;
