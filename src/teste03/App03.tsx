import { useState } from "react"

function App03() {

    const [ newItem, setNewItwem] = useState('');

    const [ list, setList ] = useState(["Peter", "John"])

    function addToList() {
        setTimeout(() => {
            setList(state => [...state, newItem]);
        }, 500)
    }

    return (
      <>
      <input placeholder="Novo item" value={newItem} onChange={e => setNewItwem(e.target.value)}/>
        <button onClick={addToList}>Adicionar</button>
        <ul>
            {list.map(item => <li key={item}>{item}</li>)}
        </ul>
      </>
    )
  }
  
  export default App03