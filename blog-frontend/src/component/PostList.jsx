import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { List, Card, Spin } from 'antd';
const { Meta } = Card;

export const PostList = () => {
        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5050/posts')
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <Spin size="large" />;
    return (
        <>
            <div style={{padding: '20px'}}>
                <List
                    grid={{gutter: 16, column: 3}}
                    dataSource={posts}
                    renderItem={post => (
                        <List.Item>
                            <Link to={`/posts/${post._id}`}>
                                <Card
                                    hoverable

                                >
                                    <Meta title={post.title} description={post.excerpt}/>
                                </Card>
                            </Link>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}