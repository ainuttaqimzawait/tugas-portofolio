import React from "react";
import NavigationBar from "./components/home/navbar";
import Intro from "./components/home/Intro";
import HomeContact from "./components/home/HomeContact";
import LiveChat from "./components/home/LiveChat";

export default class Component extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <HomeContact />
                <Intro />
                <LiveChat />
            </div>
        )
    }
}