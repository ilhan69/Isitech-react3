import axios from 'axios'
import { useEffect, useState } from "react"
import { Col, Row, Spinner } from "react-bootstrap"
import DashboardLayout from "../../layouts/DashboardLayout"

import { API_URL_REALISATIONS } from '../../../config/constants'

const Dashboard = () => {

    const [dataList, setDataList] = useState(null)

    useEffect(() => {
        axios.get(API_URL_REALISATIONS).then(res => {
            setDataList(res.data)
        })
    }, [])

    return (
        <DashboardLayout title='Accueil'>
            <p className='h3'>Découvrez les réalisations</p>
            
            {dataList !== null ? (
                <Row>
                    { dataList.data.map((d, i) => {
                        return (<Col key={i} md={3}>
                                {d.name}
                            </Col>)
                    }) }
                </Row>
            ) : <Spinner animation="border" role="status">
                <span className="visually-hidden">Chargement...</span>
            </Spinner>
            }

        </DashboardLayout>
    )
}

export default Dashboard