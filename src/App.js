import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoListContent from './components/TodoListContent';
import Footer from './components/Footer';
import FormContent from './components/Form/FormContent';
import MemeGenerator from './components/MemeGenerator';


function App() {
  return (
    <div>
      <Header />
      
      
      {/* <TodoListContent /> */}

      {/* <FormContent /> */}

      <MemeGenerator />

      <Footer />
    </div>
  );
}

export default App;
