import { Header } from "./componentes/header"
import { Sobre } from "./componentes/sobre"
import { Chamada } from "./componentes/chamada"
import { Servicos } from "./componentes/servicos"
import { Patologias } from "./componentes/patologia"
import { Feedbacks } from "./componentes/feedbacks"
import { Localizacao } from "./componentes/localizacao"
import { Footer } from "./componentes/footer"


function App() {
  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <Sobre/>

        <Chamada/>

        <Servicos/>

        <Patologias/>

        <Feedbacks/>

        <Localizacao/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
