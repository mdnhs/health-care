import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/context/AuthProvider";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import SignUp from "./components/SignUp/SignUp";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import FindDoctor from "./components/FindDoctor/FindDoctor";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="bg-gray-50 flex flex-col h-screen justify-between m-2">
      <AuthProvider>
        <Router>
          <Header className="h-10"></Header>
          <Switch className="mx-auto h-10">
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/finddoc">
              <FindDoctor></FindDoctor>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer className="h-10"></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
