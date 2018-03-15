import React from 'react';
import Hobbies from './Hobbies';
import Main from './Main';

const activies = ['Correr', 'Dormir', 'Codear', 'Escuchar musica', 'Cantar', 'Danzar'];
const image = 'gato.gif';

const Section = () => (
    <section>
        <Hobbies info={activies}/>
        <Main ruta={image}/>
        </section>

);


export default Section;