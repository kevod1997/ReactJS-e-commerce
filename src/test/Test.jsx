import React, {useState} from 'react'

function Test() {
    function handleClick(){
        alert('hicieron click')
    }

    function onKeyDown(){

    }

    const [submit, setSubmit] = useState('')
  return (
    <div onClick={handleClick} style={{border: '3px solid red', margin: '20px', padding: '15px'}} >Test
    <input onKeyDown={onKeyDown} value={submit} type={"text"}  />
    <button>Enviar</button>
    </div>
  )
}

export default Test