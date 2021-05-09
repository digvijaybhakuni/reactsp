import React, { useEffect, useState, useRef } from "react";

export const Blog = () => {

    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);
    const getAllPosts = useRef(async () => {
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json());
        console.log('posts', posts);
        setPosts(posts);
    });
    const getAllUsers = useRef(async () => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
        console.log('users', users);
        setUsers(users);
    });
    useEffect(() => {

        // setTimeout(() => {

        //     getAllPosts();

        //     //.then(res => res.json()).then(posts => setPosts(posts))
        // }, 2000);
        //console.table(posts);
        //setPosts(posts);
        getAllPosts.current();
        getAllUsers.current();

    }, [getAllUsers, getAllPosts]);


    return (<div className="container">
        <div className="posts">
            {posts && users ? <PostList posts={posts} users={users} /> : <h3>Loading...</h3>}
        </div>
    </div>);

};

const PostList = (props) => {
    const { posts, users } = props;
    const getUser = id => {
        const user = users.find(u => u.id === id);
        return (<div>
            <span>{user.username}</span>
        </div>)
    };
    return (<div>
        {posts.map(p => <PostCard key={p.id} post={p} author={getUser(p.userId)} />)}
    </div>)

};


const PostCard = ({post, author}) => {

    return <>
        <div class="card" style={{width: '60rem'}}>
            <div class="card-body">
                <h5 class="card-title">{post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">{post.body}</p>
                <a href={`/post/${post.id}`} class="card-link">...Read More</a>
                <a href={`/author/${post.userId}`} class="card-link">{author}</a>
            </div>
        </div>
    </>;

}