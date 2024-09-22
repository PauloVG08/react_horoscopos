import { useState } from 'react';
import './App.css';
import Calendario from './components/Calendario.jsx';
import Horoscopo from './components/Horoscopo.jsx';

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="App bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold mb-10 drop-shadow-lg">Descubre tu Horóscopo</h1>
            <div className="container flex justify-between w-4/5">
                <Calendario setSelectedDate={setSelectedDate} />
                <Horoscopo selectedDate={selectedDate} />
            </div>
        </div>
    );
}

export default App;
