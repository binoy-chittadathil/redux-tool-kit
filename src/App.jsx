
import { useSelector } from 'react-redux'
import './App.css'
import Color from './components/Color'
import Count from './components/Count'

function App() {
  const isColor=useSelector(state=>state.isColor)

  return (
    <div className={`app ${isColor ? "color_black" : "color_blue"}`}>
      <Count/>
      <Color/>
    </div>
  )
}

export default App
