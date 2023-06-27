import React, { Children } from 'react'
import { Button } from 'react-bootstrap'

const ButtonComp = (props) => {
    const { children } = props
    return (
        <div>
            <Button>{children}</Button>
        </div>
    )
}

export default ButtonComp