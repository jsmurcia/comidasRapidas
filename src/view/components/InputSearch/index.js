import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const InputSearch = ({text,setText,searchValue}) => {

    const iconSearch =<FontAwesomeIcon icon ={faSearch} className='iconSearch'/>

     const valueChange =(e)=>{
        setText(e.target.value)
     }

     const buttonFilterInput = ()=>{
         searchValue()
     }
    
    return (
        <div className="cont__inputSearch" >
            <input 
                type='text' 
                placeholder="Buscar..." 
                className="cont__inputSearch-input" 
                onChange={valueChange}
                value={text}
            />
            <button 
                onClick={buttonFilterInput}
                className="cont__inputSearch-button"
            >
                <span>{iconSearch}</span> BUSCAR
            </button>
        </div>
    )
}

export default InputSearch