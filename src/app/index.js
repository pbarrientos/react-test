import React from "react";
import { render } from "react-dom";
console.log("REACTJS!");

import { Header } from "./components/Header.js"
import { Home } from "./components/Home.js"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="Row">
                    <Header/>
                </div>
                <div className="Row">
                    <Home name={"Patricio Barrientos Rossi"} title="Frontend developer, web carpenter">
                        <p>Reacting with React.</p>
                    </Home>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));