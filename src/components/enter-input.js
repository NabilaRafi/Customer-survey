import React from 'react'
import DateField from './date-field'
import RadioButton from './radio-button'

const EnterInput = (props) => {
    let inputField = props.type === 'date' ? 
                    <DateField /> : 
                    props.type === 'boolean' ?
                    <RadioButton /> :
                    <input type='text' {...props}/>
    return (
    <div className='enter-input-wrapper'>
        {inputField}
    </div>
    )
}


export default EnterInput