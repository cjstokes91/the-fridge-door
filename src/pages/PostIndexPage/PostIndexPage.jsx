import React from 'react';
import IndexPageItem from '../../components/IndexPageItem/IndexPageItem';

import './PostIndexPage.css'

function PostIndexPage(props) {
    return (
        <>
            <h1 className="marketplace-title">{props.pagename}</h1>
            <br />
            <br />
            <br />
            <div className='GearListPage-grid'>
                {props.posts.map(post =>
                    <IndexPageItem
                    handleAddSaved={props.handleAddSaved}
                    post={post}
                    key={post._id}
                    handleDeletePost={props.handleDeletePost}
                    user={props.user}
                    />
                )}
            </div>
        </>
    );
}

export default PostIndexPage;