const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 5050;
const cors = require("cors");


mongoose.connect('mongodb://0.0.0.0:27017/blog', );
app.use(cors({
    methods: ['GET', 'POST','PUT','DELETE'],
    credentials: true,
}));
app.use(bodyParser.json());

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    excerpt: String,
});

const Post = mongoose.model('Post', postSchema);

// GET /posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /posts/:id
app.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /posts
app.post('/posts', async (req, res) => {
    const { title, content, excerpt } = req.body;
    const newPost = new Post({ title, content, excerpt });
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT /posts/:id
app.put('/posts/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE /posts/:id
app.delete('/posts/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (deletedPost) {
            res.json({ message: 'Post deleted' });
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
