import React from 'react';
import s from './MyPosts.module.css'
import Posts from './Posts/Posts';

const MyPosts = () => {
    return (
        <div className={s.item}>
            My posts
            <div>
                <textarea></textarea>
                <button>new posts</button>
            </div>
            <Posts message="Hi, how are you?" like="15"/>
            <Posts message="It's my first post." like="20"/>
        </div>
    )
}
export default MyPosts