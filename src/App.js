import './App.css';
import Homepage from './Components/Homepage/Navbar';
import PatientSignup from './Components/Loginpage/PatientSignup';
import PatientLogin from './Components/Loginpage/PatientLogin';
import DoctorLogin from './Components/Loginpage/DoctorLogin';
import DoctorSignup from './Components/Loginpage/DoctorSignup';
import PatientPage from './Components/Mainpage/PatientPage';
import DoctorPage from './Components/Mainpage/DoctorPage';
import DoctorPresp from './Components/Mainpage/DoctorPresp';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProfileAppts from './Components/Mainpage/ProfileAppts';
import Videochat from './Components/Mainpage/Videochat';
function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="patient-signup" element={<PatientSignup />} />
          <Route path="patient-login" element={<PatientLogin />} />
          <Route path="doctor-login" element={<DoctorLogin />} />
          <Route path="doctor-signup" element={<DoctorSignup />} />
          <Route path="patient-landing" element={<PatientPage />} />
          <Route path="doctor-landing" element={<DoctorPage />} />
          <Route path="prof-app" element={<ProfileAppts />} />
          <Route path="doct-presp" element={<DoctorPresp/>} />
		  <Route path="video-chat" element={<Videochat/>} />
          {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





















