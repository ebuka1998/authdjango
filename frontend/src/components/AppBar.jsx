import React, { useContext, useEffect } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { UserContext } from '../store/userContext';

const AppBar = () => {
    const {loadUser, user, isAuthenticated, logout} = useContext(UserContext)

    useEffect(() => {
        loadUser()
        // eslint-disable-next-line
    }, [isAuthenticated])
    return (
        <Segment inverted>
            <Menu inverted secondary>
            <Link to='/'> <Menu.Item name='home'/> </Link> 
            
        
                <Menu.Menu position='right'>
                    {
                        !isAuthenticated ? (
                            <>
                                <Link to='/register'> <Menu.Item name='register'/> </Link> 
                    
                                <Link to='/login'> <Menu.Item name='login'/> </Link> 
                            
                            </>
                        ) : (
                            <>
                                <Menu.Item name={user.name}/>
                                <Menu.Item name='logout' onClick={() => logout()}/>
                            </>
                        )
                    }
                   
                </Menu.Menu>

            </Menu>
        </Segment>
    )
}

export default AppBar
