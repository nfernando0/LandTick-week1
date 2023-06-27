import React, { Children } from 'react'
import { Form } from 'react-bootstrap'

const LabelComp = (props) => {
    return (
        <div>
            <Form.Label>{props.children}</Form.Label>
        </div>
    )
}

export default LabelComp