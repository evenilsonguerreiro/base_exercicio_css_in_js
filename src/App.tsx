import { Header } from './components/Cabecalho/styles'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstilosGlobal from './styles'

function App() {
  return (
    <>
      <EstilosGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
