import React from 'react';
import { Link } from 'react-router-dom';
import '../../utils/userService';
import './PostCard.css'

function PostCard({ post, handleDeletePost, user, handleAddSaved }) {
    user = user === null ? user = NaN : user;
    const tags = post.tags.map((tag, idx) =>
        <span key={tag.value}>{idx !== 0 ? ', ' : ''}{tag.label}</span>)
    return (
        <>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">{post.user.name}</h2>
                </div>
                <div className="panel-body">
                    <dl>
                        <dt>Name: </dt> <dd>{post.name}</dd>
                    </dl>
                    <dl>
                        <dt>Categories: </dt> <dd>{tags}</dd>
                    </dl>
                    <dl>
                        <dt>Description: </dt> <dd>{post.content}</dd>
                    </dl>
                </div>
                <div className="panel-footer">
                    {user._id === post.user &&
                        <Link to={{
                            pathname: '/edit',
                            state: { post },
                        }}>Edit</Link>
                    } {user._id === post.user &&
                        <button className="btn-delete"
                            onClick={() => handleDeletePost(post._id)}
                        >
                            Delete
            </button>
                    }
                    {user._id !== post.user && <button onClick={() => handleAddSaved(post._id)}>Save to My Fridge</button>}
                </div>
            </div>
        </>
    );
}

export default PostCard;