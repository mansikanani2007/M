import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import Testapp from './Testapp'
// import Testapp1 from './Testapp1'
//import P1 from './P1'
//import Propd from './Propd';
//import App from './App.jsx'
//import Pb306 from './Pb306.jsx'
//import Pb316 from './Pb316.jsx'
//import Products from './Products.jsx'
//import Eventsd from './Eventsd.jsx'
import Router from './Router.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/* <Testapp />
    <Testapp1 /> */}
    {/*<P1/>*/}
  {/*<Propd fname="Dhruvi" lname="patel"/>*/}
  {/*<Pb306/>*/}
 {/* <Pb316/>*/}
 {/* <products /> */}
 <Router/>
{/* <Eventsd/> */}
   </StrictMode>)
