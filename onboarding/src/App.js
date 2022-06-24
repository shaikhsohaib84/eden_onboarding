import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserComponent } from './components/user/UserComponent';
import { WorkSpaceComponent } from "./components/workSpace/WorkSpaceComponent";
import { PlanComponent } from "./components/plan/PlanComponent";
import { FinalComponent } from "./components/final/FinalComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<UserComponent />} />
          <Route exact path="/workspace" element={<WorkSpaceComponent />} />
          <Route exact path="/plan" element={<PlanComponent />} />
          <Route exact path="/final" element={<FinalComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
