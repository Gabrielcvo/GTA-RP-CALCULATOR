import '../styles/calculatorCard.scss'
import React, {useState} from 'react'

export function CalculatorCard() {

  const [selects, setSelects] = useState();
  const [moneyValue, setMoneyValue] = useState()

  function CalculateBau() { 
    if(isNaN(selects*moneyValue)) {
      return "0"
    }
    if(selects === "0.40") {
      let bau = "0.35"*moneyValue
      return bau
    }
    if(selects === "0.50") {
      let bau = "0.35"*moneyValue
      return bau
    }
    return selects*moneyValue
  }

  function CalculateMecanico() {
    if(isNaN(selects*moneyValue)) {
      return "0"
    }
    if(selects === "0.35") {
      let bau = "0.30"*moneyValue
      return bau
    }
    if(selects === "0.40") {
      let bau = "0.25"*moneyValue
      return bau
    }
    if(selects === "0.50") {
      let bau = "0.15"*moneyValue
      return bau
    }
    return selects*moneyValue
  }

  function CalculateCliente() { 
    if(isNaN(selects*moneyValue)) {
      return "0"
    }
    return selects*moneyValue
  }
  

  return (
    <div className="calculatorCard">
      <div className="boxWrapper">
        <form id = "moneyForm">
          <input className = "calculatorInput"
              type="string" 
              placeholder="Valor total da venda"
              onChange = {event => setMoneyValue(event.target.value)}
          />
          
        </form>

        <div className = "calculatorList">
          <label className = "calculatorLabel">
            Parceria
          </label>
          <select className = "calculatorSelect" value={selects} onChange={event => setSelects(event.target.value)}>
              <option value="0">Selecione uma opção</option>
              <option value="0.35">35%</option>
              <option value="0.40">40%</option>
              <option value="0.50">50%</option>
            </select>
        </div>

        <div className = "spanList">
          <span className = "calculatorSpan">
            Baú da DK
            <output className = "output">{CalculateBau()}</output>
          </span>
          
          <span className = "calculatorSpan">
            Para o cliente
            <output className = "output">{CalculateCliente()}</output>
          </span>

          <span className = "calculatorSpan">
            Para o mecânico
            <output className = "output">{CalculateMecanico()}</output>
          </span>

        </div>
        
      </div>
    </div>
  )

  
}