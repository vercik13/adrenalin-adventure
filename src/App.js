import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import Footer from './components/Footer';
import './style.css';

import data from './data'

function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}/>
    )
  })




  return (
    <div>
      <Header />
      <Main />
      <section className='cards-list'>
        {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;
