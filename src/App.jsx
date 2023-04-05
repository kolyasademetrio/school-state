import Attendance from './components/Attendance';
import Header from './components/Header';
import SecondaryPage from './pages/SecondaryPage';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
   return (
      <div className="App">
         <Header />
         <main>
            <Box
               display="flex"
               justifyContent="center"
               alignItems="center"
            >
               <Routes>
                  <Route exact path="/" element={<Attendance />} />
                  <Route exact path="/secondary" element={<SecondaryPage />} />
               </Routes>
            </Box>
         </main>
      </div>
   );
}

export default App;
