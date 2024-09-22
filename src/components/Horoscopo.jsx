const Horoscopo = ({ selectedDate }) => {
    const signo = obtenerHoroscopo(selectedDate);
    const { img, text } = horoscopos[signo];

    return (
        <div className="horoscopo bg-white rounded-3xl shadow-2xl p-6 flex flex-col justify-center items-center hover:shadow-3xl transform hover:scale-105 transition duration-300">
            <h2>Horóscopo: {signo}</h2>
            <img src={img} alt={`Horóscopo de ${signo}`} className="w-40 h-40 rounded-full shadow-lg transform hover:scale-110 transition duration-300" />
            <p>{text}</p>
        </div>
    );
};

const horoscopos = {
    Aries: { img: '../assets/aries.jpg', text: 'Como lo vimos en tus horóscopos de septiembre, aprovecha el fin de semana para retomar hábitos saludables, te sentirás más conectada con ellas y hasta encontrarás la forma de sacar más provecho si logras encontrar maneras de elevar tus hábitos diarios, a rituales sagrados.' },
    Tauro: { img: '../assets/tauro.jpeg', text: 'El romance toca a tu puerta este fin de semana, o tal vez un proyecto creativo. Durante el final de mes podrías debutar como artista o en un proyecto que te permita ocupar el rol estelar. Una relación de noviazgo está llegando a un punto crítico.' },
    Geminis: { img: '../assets/geminis.jpg', text: 'Este fin de semana marca un período especialmente ocupado y quizás agitado en tu entorno familiar o tu hogar. Por ejemplo, puedes llevar trabajo a casa o descubrir que tienes más visitas o actividades en el hogar que de costumbre.' },
    Cancer: { img: '../assets/cancer.webp', text: 'Adorna tu nido, es un fin de semana para ordenar y embellecer tu hogar. Tu deseo por los lujos puede aumentar este fin de semana, pero depende de ti mantenerte dentro de los límites de tu presupuesto.' },
    Leo: { img: '../assets/leo.jpg', text: 'Si te encuentras ansiosa por hacer compras innecesarias, debes saber que en la raíz de este impulso está el deseo de mimarte y consolarte, llenar varios emocionales. No tiene nada de malo, pero hay formas económicas (e incluso gratuitas) de sentirse bien.' },
    Virgo: { img: '../assets/virgo.jpg', text: 'Es posible que durante esta temporada de eclipses tengas enfrentamientos emocionales con tu pareja o socio. Si una relación ya no tiene futuro o una conexión real que la sustente, puede venir el final definitivo.' },
    Libra: { img: '../assets/libra.jpg', text: 'Venus sigue en tu signo este fin de semana, así que puedes estar destacando o simplemente mostrarte más llamativa. Este es un buen momento para prestar más atención a los placeres, los mimos y el disfrute que tú misma te regalas.' },
    Escorpio: { img: '../assets/escorpio.jpg', text: 'El Sol está terminando su tránsito por tu zona de asociaciones y grupos. Es un fin de semana en el que estás plantando semillas para el futuro, imaginando planes que podrías comenzar a desarrollar dentro de dos meses, claro, si para entonces todavía parecen viables.' },
    Sagitario: { img: '../assets/horoscopo-sagitario.jpg', text: 'Tus gastos se pueden disparar considerablemente este fin de semana. La temporada de eclipses puede hacer que los sentimientos reprimidos u ocultos dentro de tu hogar o con tu familia, salgan a la luz.' },
    Capricornio: { img: '../assets/horoscopo-capricornio.jpg', text: 'Presta atención a lo que se está desencadenando, especialmente en torno a las demandas entre el trabajo y el hogar. Hay un punto medio entre asfixiarse y salir huyendo y este fin de semana puede obligarte a encontrarlo. No dejes que las reacciones de los demás te desanimen.' },
    Acuario: { img: '../assets/horoscopo-acuariopng.webp', text: 'Septiembre te ha permitido mostrarte más intuitiva que de costumbre, captas todas las señales ocultas de las personas que te rodean y lees entre líneas sin ninguna dificultad. Es un mes excelente para la planificación financiera y la elaboración de estrategias.' },
    Piscis: { img: '../assets/piscis.jpg', text: 'Quizá quieras suavizar las diferencias respecto a compartir el poder con tu socio o pareja. Es momento de revisar asuntos de intimidad, finanzas y otros temas cargados de emociones. Tus relaciones íntimas se intensifican, tú o tu pareja quieren una unión más profunda.' }
};

const obtenerHoroscopo = (fecha) => {
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return 'Aries';
    else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return 'Tauro';
    else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return 'Geminis';
    else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return 'Cancer';
    else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return 'Leo';
    else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return 'Virgo';
    else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return 'Libra';
    else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return 'Escorpio';
    else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return 'Sagitario';
    else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return 'Capricornio';
    else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return 'Acuario';
    else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return 'Piscis';
};

export default Horoscopo;
