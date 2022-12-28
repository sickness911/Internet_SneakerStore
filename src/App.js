import './App.css';
import { Switch, Route } from "react-router-dom";
import Menu from "./components/Menu"
import Footer from "./components/footer"
import MainConponent from "./components/mainConponent"
import BinComponent from "./components/binComponent";

function App() {
  return (
      <div>
          <Menu />
          <Switch>
              <Route path="/bin" component={BinComponent}/>
              <Route path="/" component={MainConponent}/>
          </Switch>
          <Footer />
      </div>
  );
}
export default App;
