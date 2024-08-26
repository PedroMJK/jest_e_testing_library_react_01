import { useState } from "react"

function App02() {

    const [ list, setList ] = useState(["Pedro", "Junior", "Nayara"])

    function addToList() {
        setList(state => [...state, 'Novo']);
    }

    return (
      <>
        <button onClick={addToList}>Adicionar</button>
        <ul>
            {list.map(item => <li key={item}>{item}</li>)}
        </ul>
      </>
    )
  }
  
  export default App02