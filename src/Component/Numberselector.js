import './Totalscore.css'
const Numberselector = ({ setError , error , selectedNumber , setSelectedNumber}) => {
const arrNumber = [1,2,3,4,5,6];    

const numberSelectorHandler = (value) => {
    setSelectedNumber (value);
    setError("");
}
// console.log(selectedNumber)
  return (
    <div className='sele-container'>
        <p className='error'>{error}</p>
        <div className='flexx'>
     {arrNumber.map((value, i) => (
        <div className={`btn ${selectedNumber === value ? 'selected' : ''}`}
        // isSelected={value === selectedNumber}
      
        key={i} 
        onClick={() =>numberSelectorHandler(value)}
        >{value}
        </div>
     )
     )}
     </div>
     <p className='selc-p'>Select Number</p>
    </div>

  )
}
export default Numberselector;