import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = ({ setSelectedDate }) => {
    return (
        <div className="calendario bg-white rounded-3xl shadow-2xl p-6 flex flex-col justify-center items-center hover:shadow-3xl transform hover:scale-100 transition duration-300">
            <h2>Selecciona tu día de nacimineto</h2>
            <div className="calendario bg-blue-100 rounded-2xl p-4 shadow-lg">
                <Calendar onChange={setSelectedDate} />
            </div>
        </div>
    );
};

export default Calendario;
