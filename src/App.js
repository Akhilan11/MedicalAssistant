import './App.css';
import Homepage from './Components/Homepage/Navbar';
import PatientSignup from './Components/Loginpage/PatientSignup';
import PatientLogin from './Components/Loginpage/PatientLogin';
import DoctorLogin from './Components/Loginpage/DoctorLogin';
import DoctorSignup from './Components/Loginpage/DoctorSignup';

import {BrowserRouter,Routes,Route} from "react-router-dom";

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
          {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;