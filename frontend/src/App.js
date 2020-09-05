import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import IndexLayout from "./pages/index/IndexLayout";

function App() {
    return (
        <Router>
            <IndexLayout>
                <BaseRouter />
            </IndexLayout>
        </Router>
    );
}

export default App;
