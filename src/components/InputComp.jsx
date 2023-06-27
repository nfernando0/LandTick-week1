import { Form } from 'react-bootstrap'
import React from 'react'

const InputComp = (props) => {
  return (
    <div>
      <Form.Control type={`${props.type}`} className="form-control mb-3" placeholder={`${props.placeholder}`} />
    </div>
  )
}

export default InputComp
