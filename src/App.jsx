import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>고양이 댄싱 페이지</h1>
        <p>고양이의 멋진 춤을 감상해보세요!</p>
      </header>
      <main>
        <DancingCat />
      </main>
    </div>
  )
}

export default App
