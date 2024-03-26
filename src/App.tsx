import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'

import ListaVagas from './containers/ListaVagas'

import EstilosGlobal from './styles'

function App() {
  return (
    <>
      <EstilosGlobal />
      <Cabecalho />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
