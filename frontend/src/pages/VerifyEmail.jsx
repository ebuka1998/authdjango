import React, { useContext, useState } from 'react'
import {Redirect} from 'react-router-dom'
import { UserContext } from '../store/userContext';

const VerifyEmail = (props) => {
    const {verifyUser} = useContext(UserContext)
    const [verified, setVerified] = useState(false);
    

    const verifyAccount = () => {
        const uid = props.match.params.uid

        const token = props.match.params.token

        let dataToVerify = {
            uid,
            token
        }
        verifyUser(dataToVerify)

        setVerified(true)
    }

    if (verified)
        return <Redirect to='/login' />


    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop: '200px' }}>
                <h1>Verify your Account:</h1>
                <button 
                    onClick={verifyAccount}
                    style={{ marginTop: '50px' }}
                    type="button"
                    className="btn btn-primary"
                >
                    Verify
                </button>
            </div>
        </div>
    )
}

export default VerifyEmail
