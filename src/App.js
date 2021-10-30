import logo from '@/logo.svg'
import { Button } from 'antd'
import './App.less'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">Hello Antd</Button>
      </header>
    </div>
  )
}

export default App
