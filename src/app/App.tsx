import './App.css'

import React from 'react'

import List from '../components/List/List'

function App() {
  return (
    <div className="App">
      <List
        title="Lista de usuários"
        data={[
          {name: 'Gustavo', age: '32'},
          {name: 'Pedro', age: '31'},
          {name: 'Luiz', age: '25'},
        ]}
        columns={{name: 'Nome', age: 'Idade'}}
      />
    </div>
  )
}

export default App
