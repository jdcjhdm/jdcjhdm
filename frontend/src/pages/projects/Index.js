import React from "react";
import CustomLayout from "./components/CustomLayout";
import BaseRouter from "../../routes";
import { BrowserRouter as Router } from "react-router-dom";

const Index = () => {
    return (
        <Router>
            <CustomLayout>
                <BaseRouter />
            </CustomLayout>
        </Router>
    );
};

export default Index;
