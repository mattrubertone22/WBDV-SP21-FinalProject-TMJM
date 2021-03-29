import Search from "./prototype/search";
import Details from "./prototype/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./prototype/home";

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
        </BrowserRouter>
    </div>
  );
}

export default App;
