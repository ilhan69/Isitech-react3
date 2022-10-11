import { useRef } from "react"
import { Button, Form, FormLabel } from "react-bootstrap"

import AuthLayout from "../Layouts/AuthLayout"

const Login = () => {

    const emailInput = useRef(null)
    const passwordInput = useRef(null)

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(emailInput.current.value, passwordInput.current.value)
    }

    return (
        <AuthLayout>
            <p className="h2">Connectez vous à votre espace client !</p>
            <Form onSubmit={handleLogin}>
                <FormLabel className='mt-3'>Adresse mail</FormLabel>
                <Form.Control ref={emailInput} type='email' />
                <FormLabel className='mt-3'>Mot de passe</FormLabel>
                <Form.Control ref={passwordInput} type='password' />

                <Button className="mt-3" type='submit' variant='primary'>Connexion</Button>
            </Form>
        </AuthLayout>
    )
}

export default Login