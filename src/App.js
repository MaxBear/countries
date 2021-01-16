import './App.css';

import { useEffect, useState } from 'react';

import LanguageTable from './components/LanguageTable'
import Summary from './components/Summary'
import Table from './components/Table'

function App() {

  const [appState, setAppState] = useState({
    loading: false,
    data: null
  })

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all"
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppState({
          loading: true,
          data: data
        })
      })
  }, [setAppState])

  return (
    <div className="App">
      {appState.loading &&
        <div>
          <Summary data={appState.data} />
          <Table data={appState.data} />
          <LanguageTable data={appState.data} />                    
        </div>
      }
    </div>
  );
}

export default App;
