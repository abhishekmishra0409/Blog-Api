import { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, notification } from 'antd';

export const CreatePost = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        axios.post('http://localhost:5050/posts', values)
            .then(() => {
                notification.success({ message: 'Post created successfully' });
                setLoading(false);
            })
            .catch(() => {
                notification.error({ message: 'Error creating post' });
                setLoading(false);
            });
    };

    return (
        <div style={{ padding: '20px' }}>
            <Form
                name="create-post"
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="excerpt" label="Excerpt" rules={[{ required: true, message: 'Please input the excerpt!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="content" label="Content" rules={[{ required: true, message: 'Please input the content!' }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Create Post
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}