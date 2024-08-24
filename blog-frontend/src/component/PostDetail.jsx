import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Spin, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const PostDetail = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5050/posts/${id}`)
            .then(response => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) return <Spin size="large" />;
    return (
        <>
            <div style={{padding: '20px'}}>
                {post ? (
                    <Card>
                        <Title level={2}>{post.title}</Title>
                        <Paragraph>{post.content}</Paragraph>
                    </Card>
                ) : (
                    <p>Post not found</p>
                )}
            </div>
        </>
    )
}