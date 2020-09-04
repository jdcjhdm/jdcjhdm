import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link to="/">Project</Link>
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

export default CustomLayout;
