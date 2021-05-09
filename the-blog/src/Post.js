import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const Post = (props) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState();
    useEffect(() => {
        loadPost();
    }, []);

    const loadPost = async () => { 
        // const post = fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
        setTimeout(async () => {
            const { postId }  = props.match.params;
            const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(r => r.json());
            setPost(post);
            setLoading(false);
        }, 2000);
     };

    return <>
        <div className="container">
            <div className="main-post">
                {post && JSON.stringify(post)}
            </div>
            { loading && <Loading />}
        </div>
    </>;

};