import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Form from './components/form/form.js'
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'




function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Form />
      </main>
      <Footer />

    </div>
  );
}

export default App;
