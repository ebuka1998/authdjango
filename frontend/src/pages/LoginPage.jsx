import React, { useContext, useState } from 'react'
import { Button, Form, Container } from 'semantic-ui-react'
import Input from '../components/Input';
import { UserContext } from '../store/userContext';
import {useHistory, Link} from 'react-router-dom'

const LoginPage = () => {
    const history = useHistory()
    const {loginUser} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')

    let dataToSubmit = {
        email,
        password,
    }

    const submit = (e) => {
        e.preventDefault()
        loginUser(dataToSubmit)
        history.push('/')
    }
    return (
        <Container textAlign='center'>
        <h1 style={{textAlign: 'center', marginTop: '100px'}}>Login here</h1>
        <Form >
            <Input 
                placeholder='enter your email'
                label='email'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
            />

            <Input 
                placeholder='enter your password'
                label='password'
                type='password'
                value={password}
                onChange={(e) => setPasword(e.target.value)}

            />
            <Button type='submit' onClick={submit}>Login</Button>
            <Link to='/reset_password'>
                <p style={{color: 'blue'}}>forgot password ?</p>
            </Link>
        </Form>
        </Container>
    )
}

export default LoginPage
