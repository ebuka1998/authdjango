import React from 'react'
import { Form } from 'semantic-ui-react'

const Input = ({value, onChange, placeholder, type}) => {
    return (
        <Form.Field>
            {/* <label>{label}</label> */}
            <input 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                type={type}  
                style={{width: '50%'}}    
            />
        </Form.Field>
    )
}

export default Input
