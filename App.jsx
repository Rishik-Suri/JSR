import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import NextPage from './AddRProject';
import AddUpcoming from './AddUpcoming';
import AddFuture from './AddFuture';
const App = () => {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/RProjects' element={<NextPage/>}/>
      <Route path='/Upcoming' element={<AddUpcoming/>}/>
      <Route path='/Future' element={<AddFuture/>}/>
    </Routes>
    </>
  )
}

export default App
