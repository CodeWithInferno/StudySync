import 'bootstrap/dist/css/bootstrap.min.css';
import Pomodoro from './Pages/Pomodoro';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Snow from './components/snow';
import Rain from './components/rain';
import Sounds from './components/Sounds';
import MyDock from './components/Dock';
import ImageContainer from './components/ImageSelector'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rain" element={<Rain />} />
          <Route path="/sounds" element={<Sounds />} />
          <Route path="/dock" element={<MyDock />} />
          <Route path="/snow" element={<Snow />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Pomodoro />} />
          <Route path="/image" element={<ImageContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


