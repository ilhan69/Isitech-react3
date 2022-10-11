import { Button, Form, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";

import AuthLayout from "../Layouts/AuthLayout";

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLogin = (event) => {
        console.log(watch("email"))
    }

    return (
        <AuthLayout>
            <p className="h2">Connectez vous à votre espace client !</p>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <FormLabel className='mt-3'>Adresse mail</FormLabel>
                <Form.Control {...register("email", { required: true })} type='email' />
                {errors.email && <div className="invalid-feedback d-block">Ce champ est requis.</div>}
                {' '}

                <FormLabel className='mt-3'>Mot de passe</FormLabel>
                <Form.Control {...register("password", { required: true })} type='password' />
                {errors.password && <div className="invalid-feedback d-block">Ce champ est requis.</div>}
                {' '}

                <Button className="mt-3" type='submit' variant='primary'>Connexion</Button>
            </Form>
        </AuthLayout>
    )
}

export default Login