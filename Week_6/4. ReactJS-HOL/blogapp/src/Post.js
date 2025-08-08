import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
            .catch(error => this.setState({ error: error }));
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, errorInfo) {
        alert('Error: ' + error.message);
        this.setState({ error: error });
    }

    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        }

        return (
            <div>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
