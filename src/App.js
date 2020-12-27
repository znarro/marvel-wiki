import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import HeroDetail from "./pages/HeroDetail/HeroDetail";

function App() {
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id" children={<HeroDetail />} />
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
