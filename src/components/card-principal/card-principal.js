import TituloPrecos from '../card-precos'
import TrocaPlanos from '../troca-planos'

import './card-principal.css'

const CardPrincipal = () => {
    return (
        <div className="container">
            <TituloPrecos />
            
            <TrocaPlanos/>
        </div>
    )
}

export default CardPrincipal