import { useContext } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userContext from "../../contexts/userContext";

import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const { dispatchUser } = useContext(userContext)

    const handleLogin = (data) => {
        localStorage.setItem('loggedIn', true)
        dispatchUser({ type: 'SIGNIN', payload: { logged:true, email: data.email, password: data.password } })
        navigate('/dashboard')
    }

    return (
        <AuthLayout>
            <p className="h2">Connectez vous à votre espace client !</p>
            <Form onSubmit={handleSubmit(handleLogin)}>

                <FormLabel className='mt-3'>Adresse mail</FormLabel>
                <Form.Control isInvalid={errors.email} {...register("email", { required: true })} type='email' autoComplete="email" />
                {errors.email && <div className="invalid-feedback d-block">Ce champ est requis.</div>}

                <FormLabel className='mt-3'>Mot de passe</FormLabel>
                <Form.Control isInvalid={errors.password} {...register("password", { required: true })} type='password' autoComplete="current-password" />
                {errors.password && <div className="invalid-feedback d-block">Ce champ est requis.</div>}

                <Button className="mt-3" type='submit' variant='primary'>Connexion</Button>
            </Form>
        </AuthLayout>
    )
}

export default Login