import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-container'>
            <p>
               1. what is the difference between authentication and authorization?
               They sound simmilar but some have difference, Authentication is the process of determining the user’s identity via the available credentials, thus verifying the identity.It is used by both server and client. The server uses authentication when someone wants to access the information, and the server needs to know who is accessing the information. The client uses it when he wants to know that it is the same server that it claims to be.
               on the other hand,authorization is the process of granting someone to do something. It means it a way to check if the user has permission to use a resource or not.
            </p>
            <p>
                2.why are you using firebase?what other option do you have to implement authentication?
            </p>
        </div>
    );
};

export default Blog;