import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import YayPage from './Yay';
import Home from "./Home";
import { useFetch } from "react-async"
import './App.css';

function App() {
     return (
          <>
          {APIEndPoint.startsWith('http') &&
            <APIResult />
          }
          <Router>
               <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/yay" element={<YayPage />} />
               </Routes>
          </Router>
          </>
     );
}

const APIResult = () => {
     const { data, error } = useFetch(APIEndPoint, {
       headers: { accept: "application/json" },
     })
     if (error) return <p>{error.message}</p>
     if (data) return <p>{data.message}</p>
     return null
   }

export default App;
