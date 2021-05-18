import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const Post = (props) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState();
    const [comments, setComments] = useState();
    useEffect(() => {
        loadPost();
    }, []);

    const loadPost = async () => { 
        // const post = fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
        setTimeout(async () => {
            const { postId }  = props.match.params;
            const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(r => r.json());
            const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(r => r.json());
            setComments(comments);
            setPost(post);
            setLoading(false);
        }, 2000);
     };

    return <>
        <div className="container">
            <div className="main-post">
                {post && <> <PostMain post={post}/> <CommentList comments={comments}/>  </> }
                
            </div>
            { loading && <Loading />}
        </div>
    </>;

};


const PostMain = ({post}) => <>
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
</>


const CommentList = ({comments}) => <>
    <div className="comments-list" style={{textAlign: 'left'}}>
        <h3 >Comments : </h3>
        <hr/>
        <h6><em>// TODO: Add Comment and useReducer</em></h6>
        { comments ? comments.map(e => <Comment key={e.id} comment={e} />) :<span>No Comments</span>}
    </div>
</>;

const Comment = ({comment}) => <>
    <div className="comment">

        <div>
            <strong>{comment.name} </strong>
            <span>({comment.email})</span>
        </div> 
        <div>
            <p>{comment.body}</p>
        </div>       

    </div>
</>;