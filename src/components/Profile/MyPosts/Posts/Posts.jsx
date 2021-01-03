import React from 'react';
import s from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={s.item}>
            <img src='https://habrastorage.org/r/w60/webt/5f/59/22/5f592236618ec307093228.png'/>
            {props.message}
            <div className={`${s.item} ${s.active}`}>
                <span>
                    {props.like}
                <img src="https://media.tenor.com/images/4937b993545881c736347db0d079b5a4/tenor.gif"/>
                </span>
            </div>

        </div>
    )
}
export default Posts