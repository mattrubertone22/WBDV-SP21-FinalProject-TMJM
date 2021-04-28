import { Route} from "react-router-dom";
import Home from "./home";
import Login from './login'
import Profile from './profile'
import SignUp from './register'
import Details from './details'
import Search from './search'
import NavigationBar from "./NavBar"
import userReducer from "./user-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
const reducer = combineReducers({
    userReducer: userReducer,

})

const store = createStore(reducer)
export class BaseApp extends React.Component{
  render() {
  return (
              <Provider store={store}>
    <div className="container-fluid">

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

                                     <Route
                                         exact={true}
                                    path={["/profile/:userId"]}>
                                        <NavigationBar></NavigationBar>
                                                                        <div className="wbdv-page-content">
                                                                                        <Profile/>
                                                                                        </div>
                                     </Route>
    </div>
                </Provider>
  )
}
}
export default BaseApp;