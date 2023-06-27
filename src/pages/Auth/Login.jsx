import React from 'react'
import InputComp from '../../components/InputComp'
import LabelComp from '../../components/LabelComp'
import { Button } from 'react-bootstrap'
import ButtonComp from '../../components/ButtonComp'

const Login = () => {
    return (
        <div>
            <LabelComp>Username</LabelComp>
            <InputComp type="text" placeholder="Username" />
            <LabelComp>Password</LabelComp>
            <InputComp type="password" placeholder="*****" />
            <ButtonComp>Login</ButtonComp>
        </div>
    )
}

export default Login