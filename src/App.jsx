import { Router, Route } from "@solidjs/router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Videos from "./pages/Videos";

const App = () => (
  <Router root={Layout}>
    <Route path="/" component={Home} />
    <Route path="/videos" component={Videos} />
    <Route path="*" component={() => <h2>Page non trouvée</h2>} />
  </Router>
);

export default App;