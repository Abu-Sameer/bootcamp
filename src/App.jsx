import OnlineResult from './component/OnlineResult';
import PrintOut from './component/PrintOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<OnlineResult />} />
          <Route exact path="/printout" element={<PrintOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
