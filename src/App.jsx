import Home from './components/Home'
import About from './components/About'
import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)
  let isLogin = true 

  return (
    <>
    <h1>This is the App component</h1>
      {/* <Home />
      <p>hii</p>
      <About /> */}
      { isLogin ? <Home /> : <About /> }
    </>
  
  )
}

