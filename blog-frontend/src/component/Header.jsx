import { Layout, Menu, Button } from 'antd';
import {Link, Outlet} from 'react-router-dom';
import { HomeOutlined, PlusOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export const AppHeader = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sider width={80} theme="light">
                <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="3" icon={<PlusOutlined />}>
                        <Link to="/create" />
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Main Layout */}
            <Layout>
                {/* Header */}
                <Header style={{ padding: 0, background: '#F4F6FA', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)' }}>
                    <div className="header-menu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                        <div className="logo" style={{ fontSize: 24, fontWeight: 'bold', color: '#3A3A3A' }}>
                            <Link to="/" style={{ color: '#3A3A3A', textDecoration: 'none' }}>ZuAI</Link>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Link to="/login" style={{ color: '#3A3A3A', textDecoration: 'none', marginRight: '10px' }}>Login</Link>
                            <Link to="/join">
                                <Button type="primary" style={{ background: '#7F56D9', borderColor: '#7F56D9', borderRadius: '8px' }}>
                                    Join Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Header>

                {/* Content */}
                <Content style={{ margin: '24px 16px', padding: 24, background: '#F9FAFB' }}>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
