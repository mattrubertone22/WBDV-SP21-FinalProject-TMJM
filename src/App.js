import {BrowserRouter, Route} from "react-router-dom";
import Home from "./prototype/home";
import Login from './prototype/login'
import Profile from './prototype/profile'
import SignUp from './prototype/register'
import Details from './prototype/details'
import Search from './prototype/search'
import NavigationBar from "./prototype/NavBar"


function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Route path={["/", "/home"]} exact={true}>
            <NavigationBar></NavigationBar>
            <div className="wbdv-page-content">
                <Home/>
                </div>
            </Route>
            <Route path={["/search", "/search/:title"]}
                   exact={true}>
                   <NavigationBar></NavigationBar>
                <div className="wbdv-page-content">
                                <Search/>
                                </div>
            </Route>
            <Route path="/details/:teamId" exact={true}>
                                   <NavigationBar></NavigationBar>
                                <div className="wbdv-page-content">
                                                <Details/>
                                                </div>
            </Route>
                                <Route
                                    exact={true}
                                    path={["/login"]}>
                                   <NavigationBar></NavigationBar>
                                                                   <div className="wbdv-page-content">
                                                                                   <Login/>
                                                                                   </div>
                                </Route>

                                <Route
                                    exact={true}
                                    path={["/register"]}>
                                    <NavigationBar></NavigationBar>
                                                                    <div className="wbdv-page-content">
                                                                                    <SignUp/>
                                                                                    </div>
                                </Route>
                                <Route
                                    exact={true}
                               path={["/profile"]}>
                                   <NavigationBar></NavigationBar>
                                                                   <div className="wbdv-page-content">
                                                                                   <Profile/>
                                                                                   </div>
                                </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
