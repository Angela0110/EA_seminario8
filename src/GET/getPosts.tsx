import { useState, useEffect } from "react";
import { Post } from "../modules/post";
import axios from "axios";
import './gets.css';
import '../App.css';

interface GetPostsProps {
    postsUpdated: boolean;
}

function GetPosts({ postsUpdated }: GetPostsProps) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/post')
            .then((result) => setPosts(result.data))
            .catch((err) => console.log(err))
    }, [postsUpdated]);

    return (
        <div className="component">
            <h2>Get Posts Component</h2>
            <div className="list-container">
                <div className="table-container">
                    <table className="list-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post, index) => (
                                    <tr key={index}>
                                        <td>{post.title}</td>
                                        <td>{post.content}</td>
                                        <td>{post.author.name.first_name} {post.author.name.middle_name} {post.author.name.last_name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GetPosts;

