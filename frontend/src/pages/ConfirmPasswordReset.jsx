import React, { useContext, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { UserContext } from '../store/userContext';
import Input from '../components/Input';

const ConfirmPasswordReset = (props) => {
    const {confirmResetPassword} = useContext(UserContext)
    const [new_password, setPassword] = useState('')
    const [re_new_password, setRe_password] = useState('')

    const submit = () => {
        let dataToSubmit = {
            uid: props.match.params.uid,
            token: props.match.params.token,
            new_password,
            re_new_password
        }

        confirmResetPassword(dataToSubmit)
    }
    return (
        <Form >
            <Input 
                placeholder='enter your new password'
                label='password'
                type='password'
                value={new_password}
                onChange={(e) => setPassword(e.target.value)}
                
            />

            <Input 
                placeholder='confirm your new password'
                label='password'
                type='password'
                value={re_new_password}
                onChange={(e) => setRe_password(e.target.value)}

            />
            <Button type='submit' onClick={submit}>Reset passoword</Button>
        </Form>
    )
}

export default ConfirmPasswordReset
