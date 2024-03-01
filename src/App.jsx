import styles from './App.module.css'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Copyright } from './components/copyright/Copyright'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/project/Projects'
import { Skills } from './components/skills/Skills'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      <Copyright/>
    </div>
  )
}

export default App
