import React, { useContext, useState } from 'react'
import AppBar from '../components/AppBar';
import { Button, Form, Message } from 'semantic-ui-react'
import { UserContext } from '../store/userContext';
import Input from '../components/Input';

const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const {resetPassword, loading} = useContext(UserContext)

    const submit = () => {
        resetPassword({email})
    }
    return (
        <div>
            <AppBar/>
            <p>enter your email to reset password</p>
            {
                loading ? '' : (
                    <>
                        <Message>
                            <Message.Header>password reset</Message.Header>
                            <p>
                                we have sent password reset link link to {email}. please kindly check to reset your
                                password
                            </p>
                        </Message>
                    </>
                )
            }
            <Form >
                <Input 
                    placeholder='enter your email'
                    label='email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
                <Button type='submit' onClick={submit}>send</Button>
            </Form>
        </div>
    )
}

export default ResetPassword
