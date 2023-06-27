import React from 'react'
import InputComp from '../../components/InputComp'
import LabelComp from '../../components/LabelComp'
import ButtonComp from '../../components/ButtonComp'

const Register = () => {
  return (
    <div>
      <LabelComp>Nama Lengkap</LabelComp>
      <InputComp type="text" placeholder="Nama Lengkap" />
      <LabelComp>Username</LabelComp>
      <InputComp type="text" placeholder="Username" />
      <LabelComp>Email</LabelComp>
      <InputComp type="email" placeholder="Email" />
      <LabelComp>Password</LabelComp>
      <InputComp type="password" placeholder="*****" />
      <ButtonComp>Register</ButtonComp>
    </div>
  )
}

export default Register