import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Kingdom from './component/Kingdom';
import { Link } from 'react-router-dom';
import KingdomSelector from './component/KingdomSelector';

function App() {
  const DATA_URL = "https://restcountries.com/v3.1/name/kingdom";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(DATA_URL)
      const kingdoms = await response.json()
      setData(kingdoms)
      console.log(kingdoms)
    } catch {
      setError("No Kingdoms Found")
    }
  }

  return (
    <BrowserRouter className="">
      {error && <div>{error}</div>}
     <KingdomSelector data={data}/>

        <Routes>
          {data.map((kingdom, index) => (
            <Route key={index} path={`/${kingdom.name.common}`} element={<Kingdom/>} />
          ))}
        </Routes>
    </BrowserRouter>
  )
}

export default App
