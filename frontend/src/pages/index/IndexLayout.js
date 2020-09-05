import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const IndesLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link to="/">Home Page</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/projects">Projects</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/add">Add New Project</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: 50 }}>
                <div style={{ background: "#fff", padding: 24, minHeight: 280 }} className="site-layout-content">
                    {props.children}
                </div>
            </Content>
        </Layout>
    );
};

export default IndesLayout;
