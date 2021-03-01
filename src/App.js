import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import {Home} from "./pages/Home"
import {Services} from "./pages/Services"
import {Contact} from './pages/Contact'
import {About} from './pages/About'
import {Error} from './pages/Error'
import {Footer} from "./components/Footer/Footer"
import {NavBar} from "./components/NavBar/NavBar"
import ScrollToTop from "./components/modules/Scrolltop"

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/contact-us" component={Contact}/>
          <Route exact path="/about-us" component={About}/>
          <Route component={Error}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;