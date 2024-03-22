import './troca-planos.css'

const TrocaPlanos = () => {
    return (
        <section className="container_planos">
            <div className="tipos_planos">
                <p>Mensal</p>
                
                <div className="switch__container">
                    <input id="switch-shadow" className="switch switch--shadow" type="checkbox"/>
                    <label for="switch-shadow"></label>
                </div>
                
                <p>Anual <i className="desconto">(economize 20%)</i></p> 
                
            </div>
            
            <div className="tipos_planos">
                <p>Selecione a moeda</p>
                <select className="custom-select" >
                    <option value="0">Selecione:</option>
                    <option value="1">BRL </option>
                    <option value="2">USD</option>
                    <option value="3">CAD</option>
                    <option value="4">GBP</option>
                    <option value="5">EUR</option>
                    <option value="6">AUD</option>
                    <option value="7">JPY</option>
                 </select>
            </div>
            
        </section>
        
    )
}

export default TrocaPlanos