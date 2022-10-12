import DashboardLayout from "../Layouts/DashboardLayout"
import BasicForm from "../parts/BasicForm"
import SimpleInput from "../parts/SimpleInput"

const InputPage = () => {

    return (
        <DashboardLayout title='Input page'>

            SimpleInput :
            <SimpleInput />

            <hr />

            BasicForm :
            <BasicForm />

        </DashboardLayout>
    )
}

export default InputPage