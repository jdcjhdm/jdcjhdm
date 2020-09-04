import React from "react";
import { Route } from "react-router-dom";
import ProjectsListView from "./pages/projects/components/ProjectsListView";
import ProjectDetailView from "./pages/projects/components/ProjectDetailView";

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={ProjectsListView} />
        <Route exact path="/:projectID" component={ProjectDetailView} />
    </div>
);

export default BaseRouter;
