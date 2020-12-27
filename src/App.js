import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import HeroDetail from "./pages/HeroDetail/HeroDetail";
import { HeroContextProvider } from "./contexts/HeroContext";

function App() {
  return (
    <>
      <Router>
        <Header />

        <HeroContextProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id" children={<HeroDetail />} />
          </Switch>
        </HeroContextProvider>

        <Footer />
      </Router>
    </>
  );
}

export default App;
