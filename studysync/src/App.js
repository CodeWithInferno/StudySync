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
import ImageContainer from './components/ImageSelector';
import Todo from './components/Todo';
import Awake from './components/Awake';
import ProgressBar from './components/ProgressBar';
import DayStreak from './components/Daysteak';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Pomodoro />} />
          <Route path="/prototype/rain" element={<Rain />} />
          <Route path="/prototype/sounds" element={<Sounds />} />
          <Route path="/prototype/day" element={<DayStreak />} />
          <Route path="/prototype/progress" element={<ProgressBar />} />
          <Route path="/prototype/dock" element={<MyDock />} />
          <Route path="/prototype/snow" element={<Snow />} />
          <Route path="/prototype/todo" element={<Todo />} />
          <Route path="/prototype/awake" element={<Awake />} />
          <Route path="/prototype/image" element={<ImageContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


