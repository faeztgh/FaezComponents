import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MainContainer } from "./Pages";
import { Neon, NavbarContainer, FloatCard, DarkMode } from "./Components";
import { GettingStart } from "./Pages";

function App() {
    const scWidth = window.innerWidth;
    return (
        <>
            <Router>
                <NavbarContainer />

                <Switch>
                    <Route exact path="/" component={MainContainer} />

                    <Route
                        path="/gettingstart"
                        component={() => <GettingStart />}
                    />
                    <Route
                        path="/neon"
                        component={() => (
                            <Neon
                                input="Welcome"
                                fontSize={scWidth / 50}
                                color="white"
                            />
                        )}
                    />
                    <Route
                        path="/floatcard"
                        component={() => (
                            <FloatCard
                                title="welcome"
                                desc="This is a useless text just for show off!"
                            />
                        )}
                    />
                    <Route
                        path="/darkmode"
                        component={() => (
                            <DarkMode
                                title="welcome"
                                desc="This is a useless text just for show off!"
                            />
                        )}
                    />
                    <Route path="/*" component={() => <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
