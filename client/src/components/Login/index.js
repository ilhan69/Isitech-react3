import { useState } from "react"
import { Button, Form, FormLabel } from "react-bootstrap"

import AuthLayout from "../Layouts/AuthLayout"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(password, email)
    }

    return (
        <AuthLayout>
            <p className="h2">Connectez vous à votre espace client !</p>
            <Form onSubmit={handleLogin}>
                <FormLabel className='mt-3'>Adresse mail</FormLabel>
                <Form.Control value={email} onChange={e => setEmail(e.target.value)} type='email' />
                <FormLabel className='mt-3'>Mot de passe</FormLabel>
                <Form.Control value={password} onChange={e => setPassword(e.target.value)} type='password' />

                <Button className="mt-3" type='submit' variant='primary'>Connexion</Button>
            </Form>
        </AuthLayout>
    )
}

export default Login