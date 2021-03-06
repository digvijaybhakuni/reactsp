import React, { useEffect, useState } from "react";

export const Blog = () => {

    const [posts, setPosts] = useState(null);
    useEffect(()=>{

        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json()).then(posts => setPosts(posts))
        }, 2000);
        //console.table(posts);
        //setPosts(posts);

    }, []);


    return (<div>
        <div className="posts">
            { posts ? <PostList posts={posts}/> : <h3>Loading...</h3>}
        </div>
    </div>);

};

const PostList = (props) => {

    return (<div>
        {props.posts.map(p => <div>{p.title}</div>) }
    </div>)

};