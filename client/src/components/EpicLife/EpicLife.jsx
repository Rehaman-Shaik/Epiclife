import React from 'react';
import NavBar from '../Common/NavBar';
import '../../../public/styles/epiclife_home.css'
import PostCreation from './Home/PostCreation';
import Post from './Home/Post';

function HomePage() {
    return (
        <>
            <NavBar />
            <div style={{ marginTop: "1%", display: 'flex', flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                    <div style={{paddingLeft:'10%', paddingRight:'10%'}}>
                        <PostCreation />
                        <Post />
                    </div>
                </div>
                <div style={{ backgroundColor: "red", flex: 1, height: "89vh" }}></div>
            </div>
        </>
    );
}

export default HomePage;
