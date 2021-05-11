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
                {post && <PostMain post={post}/> }
            </div>
            { loading && <Loading />}
        </div>
    </>;

};


const PostMain = ({post}) => <div>
    <div className="postMain">
        <div className="title">{post.title}</div>
        <div className="author-n-tags">
            <div className="author-name-link">DigvijayB</div>
            <div className="tags">
                <span>java</span>
                <span>spring</span>
                <span>programing</span>
            </div>
        </div>
        <div className="date_post">2021/04/01</div>
        <div className="post_content">
            {post.body}
        </div>
    </div>
</div>