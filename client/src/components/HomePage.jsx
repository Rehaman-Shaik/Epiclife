import React, { useEffect } from 'react';

function HomePage() {
    useEffect(() => {
        document.title = 'Homepage';
    }, []);

    return (
        <>
            <h1>Homepage</h1>
            <a href="/project/keeper-app">Go to Keeper App</a>
            <br />
            <a href="/epic-life/home">Go to EpicLife</a>
            <br />
            <a href="portfolio">Go to Portfolio</a>
        </>
    );
}

export default HomePage;
