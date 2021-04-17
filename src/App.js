import {BrowserRouter, Route} from "react-router-dom";
import Home from "./prototype/home";
import Login from './prototype/login'
import Profile from './prototype/profile'
import SignUp from './prototype/register'
import Details from './prototype/details'
import Search from './prototype/search'
function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Route path="/" exact={true}>
                <Home/>
            </Route>
            <Route path={["/search", "/search/:title"]}
                   exact={true}>
                <Search/>
            </Route>
            <Route path="/details/:teamId" exact={true}>
                <Details/>
            </Route>
                                <Route
                                    exact={true}
                                    path={["/login"]}>
                                    <Login/>
                                </Route>

                                <Route
                                    exact={true}
                                    path={["/register"]}>
                                    <SignUp/>
                                </Route>
                                <Route
                                    exact={true}
                               path={["/profile"]}>
                                    <Profile/>
                                </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
