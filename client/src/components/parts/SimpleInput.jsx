import useInput from '../../hooks/useInput';

// SimpleInput est un composant qui va nous permettre de générer un formulaire
const SimpleInput = () => {

    // useInput est un hook qui permet de contrôler un input, d'en récuperer la valeur et de faire de la validation.
    // useInput nous retourne 6 paramètres : 
    // value = la valeur de l'input qui est actualisée en temps réel en utilisant un useState
    // isValid =  un booléen qui devient false quand a terminé de compléter l'input, si le contenu de l'input ne répond pas à la condition définie en paramère du hook
    // hasError = si le contenu de l'input n'est pas valide et que l'input a été modifié
    // valueChangeHandler = la référence vers la fonction à mettre dans le onChange de l'input
    // inputBlurHandler = la référence vers la fonction à mettre dans le onBlur de l'input
    // reset = fonction qui permet de réinitialiser l'input dans son état initial
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailIsInvalid,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim() !== '' && value.includes('@'));

    // on déclare le booléen formIsValid en false
    let formIsValid = false;
    // Si les deux inputs sont valides, on le passe en true
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // Lorsqu'on envoie le formulaire, on annule le comportement par défaut
    const formSubmissionHandler = (event) => {
        event.preventDefault();

        // Si un des deux inputs n'est pas valide, on ne continue pas
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        // On affiche les valeurs entrées des inputs puis on réinitialise les inputs
        console.log(enteredName, enteredEmail);

        resetNameInput();
        resetEmailInput();
    };

    // En cas d'erreur, on ajoute la classe invalid sur les inputs concernés
    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = enteredEmailIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />

                {nameInputHasError && (
                    <p className='error-text'>Name must not be empty.</p>
                )}

            </div>

            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />

                {enteredEmailIsInvalid && (
                    <p className='error-text'>Please enter a valid email.</p>
                )}

            </div>

            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};




export default SimpleInput; 