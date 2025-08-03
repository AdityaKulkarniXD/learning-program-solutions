import React from "react";
import Post from "./Post";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                const postList = data.map(item => new Post(item.id, item.title, item.body));
                this.setState({ posts: postList });
            })
            .catch(error => {
                this.setState({ error });
                throw error;
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred: " + error.message);
        console.error("Error info:", info);
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <p>Error loading posts.</p>;
        }

        return (
            <div>
                <h1>Blog Posts</h1>
                {posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
