import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectsListView from "./pages/index/projects/ProjectsListView";
import ProjectDetailView from "./pages/index/projects/ProjectDetailView";
import Form from "./pages/index/add-project/Form";
import HomePage from "./pages/index/home/HomePage";

const BaseRouter = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsListView} />
        <Route exact path="/add" component={Form} />
        <Route exact path="/projects/:projectID" component={ProjectDetailView} />
    </Switch>
);

export default BaseRouter;
