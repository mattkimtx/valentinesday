import { Heart } from './heart';
import { BiggerButton } from './BiggerButton';
import { Link } from "react-router-dom";
import './App.css';

const Home = () =>{
     return (
          <div className="App">
               <header className="main-header"> 
               <p className="hsuhay">hi hsu hay!</p>
               <h1 className="question">Will you be my Valentines?
                    <Heart size="50px" marginLeft="20px"/>
                    <Heart size="50px" marginLeft="20px"/>
                    <Heart size="50px" marginLeft="20px"/>
                    </h1>
                    <div className="inside-header">
                    <Link to="/yay">
                         <button className="button-yes">Yes!</button>                    
                    </Link>
                         <div className="no-container">
                         <BiggerButton />
                         </div>
                    </div>
               </header>
          </div>
     );
}

export default Home;
