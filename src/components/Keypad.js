// Code Keypad Component Here

function Keypad (){
    function handleChange(e){
        console.log('Entering password...')
        return e.target.value
    }
    return (
        <div>
            <input type="password" name="password" id="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;