import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, PlusCircleOutlined } from '@ant-design/icons';

const { Header } = Layout;

export const AppHeader = () => {
    return (
        <>
            <Header className="site-layout-background">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="create" icon={<PlusCircleOutlined />}>
                        <Link to="/create">Create Post</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </>
    )
}