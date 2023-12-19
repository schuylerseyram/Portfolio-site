// import Message from './Message';
// import ListGroup from "./components/ListGroup";
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Proj1 from './components/Voice-Proj1'
import Proj2 from './components/TWars-Proj2'
import Proj3 from './components/Nav-Proj3'



function App() {
  return(
    <>
    <Routes>
      <Route path="/"element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume/>} />
        <Route path ="projects"element={<Projects/>} />
        <Route path = "Proj1" element={<Proj1/>} />
        <Route path = "Proj2" element={<Proj2/>} />
        <Route path = "Proj3" element={<Proj3/>} />
        

      </Route>

      

    </Routes>
    </>
  )
}

export default App