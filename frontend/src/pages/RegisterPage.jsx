import React, {useContext, useState} from 'react'
import { Button, Form, Container, Message } from 'semantic-ui-react'
import Input from '../components/Input';
import { UserContext } from '../store/userContext';

const RegisterPage = () => {
    const {registerUser, loading} = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPasword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    let dataToSubmit = {
        email,
        name,
        password,
        re_password: confirmPassword
    }

    const submit = (e) => {
        e.preventDefault()
        registerUser(dataToSubmit)
        if(!loading){
            setEmail('')
            setName('')
            setPasword('')
            setConfirmPassword('')
        }
    }

    return (
        <Container textAlign='center'>
                {
                    loading ? '' : (
                        <>
                            <Message>
                                <Message.Header>activation message</Message.Header>
                                <p>
                                    we have sent activation link to {email}. please verify your email
                                </p>
                            </Message>
                        </>
                    )
                }
                
            <h1 style={{textAlign: 'center', marginTop: '100px'}}>Register here</h1>
            <Form >
                <Input 
                    placeholder='enter your email'
                    label='email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
                <Input 
                    placeholder='enter your name'
                    label='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <Input 
                    placeholder='enter your password'
                    label='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPasword(e.target.value)}

                />
                <Input 
                    placeholder='confirm password'
                    label='confirm password'
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}

                />
                <Button type='submit' onClick={submit}>
                    {!loading ? 'loading...' : 'Register'}
                </Button>
            </Form>
        </Container>
    )
}

export default RegisterPage
