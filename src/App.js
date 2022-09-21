import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Pages/Homepage';

function App() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='home' element={<Homepage />} />
      </Routes>
    </Box>
  );
}

export default App;
