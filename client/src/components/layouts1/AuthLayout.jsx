import { Col, Image, Row } from "react-bootstrap"

import loginImage from '../../images/login.jpg'

const AuthLayout = (props) => {
    return (
        <section className="vh-100 container-fluid">
            <Row className="p-5">
                <Col md={8} sm={12}>
                    <div className="w-100">
                        <Image className="w-100 img-fluid" src={loginImage} />
                    </div>
                </Col>
                <Col md={4} sm={12} className="d-flex align-items-center">
                    <div>
                        {props.children}
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default AuthLayout