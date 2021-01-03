import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainContainer } from "./Pages";
import { Neon } from "./Components";
function App() {
    return (
        <>
            <Router>
                {/* <Neon input={"Welcome ❤"} fontSize="1rem" color="white" />*/}
                {/*<FloatCard title="welcome" desc="This is a useless text just for show off!"/>*/}
                <Switch>
                    <Route path="/" component={MainContainer} />

                    <Route path="/*" component={() => <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
