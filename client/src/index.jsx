import React from "react";
import ReactDOM from "react-dom";
import KeeperApp from "./components/KeeperApp.jsx";
import HomePage from "./components/HomePage";
import EpicLife from "./components/EpicLife.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/project/keeper-app" element={<KeeperApp />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/project/epic-life" element={<EpicLife />} />
            </Routes>
        </Router>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));

