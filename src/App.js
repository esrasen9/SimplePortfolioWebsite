import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import {Switch,Route} from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import PortfoliosPage from "./pages/PortfoliosPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <div className="sidebar">
                <Navbar/>
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" render={AboutPage}/>
                        <Route path="/portfolios" component={PortfoliosPage}/>
                        <Route path="/blogs" component={BlogsPage}/>
                        <Route path="/contact" component={ContactPage} />
                    </Switch>
                </div>
            </div>
            <div className="contact">
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
