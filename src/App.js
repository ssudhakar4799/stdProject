// import logo from './logo.svg';
import './App.css';
// import StudentSideNav from './Components/Student/Studentcard/StudentSideNav';
import Router from './Components/Routes/Router';
import { useSelector } from 'react-redux';
// import { store, persistStores } from "./Components/Store/Redux/Store"
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import EmployeSidNav from './Components/EmployeSidNav/EmployeSidNav';
// import Modal from './Components/Modal/Modal';
function App() {
  const state = useSelector((state) => state)
  console.log(state);
  return (
    <Router/>
        // <section className='main-section'>
        //   {
        //     state.auth.isAuthentification ? (
        //       state.auth.registerData.type==="employe"?(
        //         <>

                
        //         <Router />
        //       </>
        //       ):(
        //         <>

                
        //         <Router />
        //       </>
        //       )

        //     ) : (
        //       <Router />
        //     )
        //   }
        // </section>

  );
}

export default App;
