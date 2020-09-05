import React from "react";
import CustomLayout from "./components/CustomLayout";
import BaseRouter from "../../routes";
import { BrowserRouter as Router } from "react-router-dom";

const Index = () => {
    return (
        <div>
            <Router>
                <CustomLayout>
                    <BaseRouter />
                </CustomLayout>
            </Router>
        </div>
    );
};

export default Index;
