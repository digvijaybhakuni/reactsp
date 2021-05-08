import { useEffect, useState } from "react";

export const Post = (props) => {
    const [post, setPost] = useState();
    useEffect(() => {
        loadPost();
    }, []);

    const loadPost = async () => { 
        // const post = fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
        const post = await fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(r => r.json());
        setPost(post);
     };

    return <>
        <div className="container">
            {post && JSON.stringify(post)}
        </div>
    </>;

};