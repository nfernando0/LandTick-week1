import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../assets/css/Hero.css'

function HeroComp() {
    return (
        <>
            <div className='hero'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-white'>Selamat Pagi, Ticket Seekers!</h1>
                            <p className='text-white'>Ingin Pulkam dengan Good Ideal? <span className='d-block'>Masuk atau Daftar Sekarang</span></p>

                        </Col>
                        <Col>
                            <div className='position-relative img'>
                                <img src="../src/assets/img/1.png" className='position-absolute img-1' alt="image-1" />
                                <img src="../src/assets/img/2.png" className='position-absolute img-2' alt="image-2" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default HeroComp