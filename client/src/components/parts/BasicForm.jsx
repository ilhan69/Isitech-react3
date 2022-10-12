import useInput from "../../hooks/useInput";

const BasicForm = (props) => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim() !== '');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!enteredNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid) {
            return;
        }

        console.log(enteredName, enteredEmail, enteredLastName);
        resetNameInput();
        resetLastNameInput();
        resetEmailInput();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='control-group'>
                <div className='form-control'>
                    <label htmlFor='name'>First Name</label>
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
                <div className='form-control'>
                <label htmlFor='lastname'>Last Name</label>
                    <input
                        type='text'
                        id='lastname'
                        onChange={lastNameChangedHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName}
                    />

                    {lastNameInputHasError && (
                        <p className='error-text'>LastName must not be empty.</p>
                    )}
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='emailAddress'>E-Mail Address</label>
                <input
                        type='text'
                        id='emailAddress'
                        onChange={emailChangedHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail}
                    />

                    {emailInputHasError && (
                        <p className='error-text'>Email must not be empty.</p>
                    )}
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;