import './App.css';
import { Error } from './Pages/Error';
import { Home } from './Pages/Home';
import { Rooms } from './Pages/Rooms';
import { SingleRoom } from './Pages/SingleRoom';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './Componants/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
