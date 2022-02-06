import './styles.css'

const InputSearch = ({text,setText,searchValue}) => {

     const valueChange =(e)=>{
        setText(e.target.value)
     }

     const buttonFilterInput = ()=>{
         searchValue()
     }
    
    return (
        <div className="cont__input" >
            <input 
                type='text' 
                placeholder="Buscar..." 
                className="cont__input-input" 
                onChange={valueChange}
                value={text}
            />
            <button onClick={buttonFilterInput}>Buscar</button>
        </div>
    )
}

export default InputSearch