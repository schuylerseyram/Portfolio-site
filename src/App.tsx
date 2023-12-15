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
      </Route>

      

    </Routes>
    </>
  )
}

export default App