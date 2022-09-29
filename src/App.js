
import './App.css';
import Navbar from '../src/components/Navbar'
import Home from './components/Home';
import TokenPage from './components/TokenPage';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Crops from './components/Crops';
import Login from './components/Login';
import Newscomponent from './components/Newscomponent';

import AllState from './Context/MyContextFile';
import SuccessToken from './components/SuccessToken';
import Feedback from './components/feedback';
import Chart from './components/Chart';
import Statistics from './components/stats';



function App() {

  return (
    <>
      <AllState>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/tokenPage" element={<TokenPage />}></Route>
            <Route path="/tokenPage/:slug" element={<Crops crop="Wheat" demand="2400tons" msp="50Rs" rd="2000tons" fertilizer="200rs" />}></Route>
            <Route path="/news" element={<Newscomponent />}></Route>

            <Route path='/tokenPage/wheat' element={<Crops crop="Wheat" demand="2400" msp="1900 Rs/Q" rd="24589200" fert="7.5 Kg/Q" ins="800 Rs/Q" se="2 Kg/Q" no={1} />}></Route>
            <Route path='/tokenPage/bajra' element={<Crops crop="Bajra" demand="2400" msp="2500 Rs/Q" rd="2627248" fert="6.75 Kg/Q" ins="1250 Rs/Q" se="1.7 Kg/Q" no={3} />}></Route>
            <Route path='/tokenPage/jowar' element={<Crops crop="Jowar" demand="2400tons" msp="3000 Rs/Q" rd="252627" fert="8 Kg/Q" ins="1500 Rs/Q" se="1.8 Kg/Q" no={2} />}></Route>
            <Route path='/tokenPage/paddy' element={<Crops crop="Paddy" demand="2400tons" msp="3000 Rs/Q" rd="15262" fert="10 Kg/Q" ins="1500 Rs/Q" se="2.5 kg/Q" no={0} />}></Route>
            <Route path="/success" element={<SuccessToken />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
            <Route path="/statistics" element={<Statistics />}></Route>
            {/* <Route path="/charts" element={<Chart />}></Route> */}

          </Routes>
          <Footer />
        </Router>
      </AllState>
    </>
  );
}

export default App;

// npm i cors express stripe uuid nodemon
