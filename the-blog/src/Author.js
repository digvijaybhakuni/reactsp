import { useCallback, useEffect, useState } from "react";

export const Author = (props) => {


    const [author, setAuthor] = useState();
    const [posts, setPosts] = useState();
    const loadAuthorAndPost = useCallback(async () => {
        const { authorId } = props.match.params;
        const author = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`).then(r => r.json());
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(r => r.json());
        setAuthor(author); 
        setPosts(posts)
    }, [props]); 


    useEffect(() => {
        loadAuthorAndPost();
    }, [loadAuthorAndPost]);

    return <>

        <div className="container">
            <div className="author-container">
                { author && JSON.stringify(author) }
            </div>
            <div className="posts-container">
                { posts && JSON.stringify(posts) }
            </div>
        </div>
    
    </>

};