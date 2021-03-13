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


    return (<div>
        <div className="posts">
            {posts && users ? <PostList posts={posts} users={users} /> : <h3>Loading...</h3>}
        </div>
    </div>);

};

const PostList = (props) => {
    const {posts, users } = props;
    const getUser = id => {
        const user = users.find(u => u.id === id);
        return (<div>
            <span>{user.username}</span>
        </div>)
    };
    return (<div>
        {posts.map(p => <div key={p.id}>
            <h2>{p.title}</h2>
            <div>
                <p>{p.body}</p>
            </div>
            <div>{getUser(p.userId)}</div>
        </div>)}
    </div>)

};