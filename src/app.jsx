import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHome from "./routers/MainHome/MainHome";
import SignIn from "./routers/SignIn/SignIn";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" component={SignIn}/>
                    <Route path="/signin" component={MainHome}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;