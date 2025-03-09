import React from 'react';
import CardPizza from './CardPizza';
import napolitana from '../assets/img/napolitana.jpg';
import peperoni from '../assets/img/peperoni.jpg';
import española from '../assets/img/española.jpg';
import Header from './Header'; 

function Home() {
  return (
    <div style={{ width: '100vw' }}>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
        
      }}>
        <CardPizza
          title="Napolitana"
          price="$7.950"
          ingredients="mozzarella, tomates, jamón, orégano"
          image={napolitana}
        />
        <CardPizza
          title="Peperoni"
          price="$6.950"
          ingredients="mozzarella, pepperoni, orégano"
          image={peperoni}
        />
        <CardPizza
          title="Española"
          price="$9.950"
          ingredients="mozzarella, gorgonzola, parmesano, provolone"
          image={española}
        />
      </div>
    </div>
  );
}

export default Home;