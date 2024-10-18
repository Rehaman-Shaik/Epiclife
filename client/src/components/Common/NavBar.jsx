import { React, useState } from "react";
import '../../../public/styles/epiclife_nav.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { colors } from "@mui/material";

function NavBar() {
    return (<div className="nav-header">
        <div className="nav-header-children1">
            <h1><a href="/">EpicLife</a></h1>
        </div>
        <div className="nav-header-children2">
            <a href="/epic-life/home">Home</a>
            <a href="/epic-life/to-do">To-Do</a>
            <a href="/epic-life/diary">Diary</a>
            <a href="/epic-life/finance">Finance</a>
            <a href="/epic-life/watch-list">Watch/Play</a>
            <a href="#">Chat</a>
            <a href="#">Message</a>
            <a href="#">Notifications</a>
            <div className="profile-dropdown">
                <div style={{padding:0, margin:0}}>{<> <AccountBoxIcon color="primary" /> <KeyboardArrowDownIcon color="primary" /> </>}</div>
                <div className="profile-drop-content">
                    <ul style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        <li><a href="#">Sign up</a></li>
                        <hr></hr>
                        <li><a href="#">Login</a></li>
                        <hr></hr>
                        <li><a href="#">User name</a></li>
                        <hr></hr>
                        <li><a href="#">Log out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}

export default NavBar