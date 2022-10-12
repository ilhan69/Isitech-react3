import axios from 'axios'
import { useEffect, useState } from "react"
import { Col, Row, Spinner, Modal, Button, Image } from "react-bootstrap"
import DashboardLayout from "../../layouts/DashboardLayout"

import { Input } from 'reactstrap'
import { API_URL_REALISATIONS } from '../../../config/constants'

const Dashboard = () => {

    const [dataList, setDataList] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [realisationShowing, setRealisationShowing] = useState(null)

    const handleFilter = (e) => {
        const newFilteredData = dataList.filter(item => item.name.includes(e.target.value))
        setFilteredData(newFilteredData)
    }

    useEffect(() => {
        axios.get(API_URL_REALISATIONS).then(res => {
            setDataList(res.data.data)
            setFilteredData(res.data.data)
        })
    }, [])

    return (
        <DashboardLayout title='Accueil'>
            <p className='h3'>Découvrez les réalisations</p>

            {dataList !== null ? (
                <>
                    <Input type='text' onChange={handleFilter} placeholder='Checher dans les réalisations...' />
                    <Row>
                        {filteredData.map((d, i) => {
                            return (<Col key={i} md={3}>
                                <span onClick={() => setRealisationShowing(d)}>{d.name}</span>
                            </Col>)
                        })}
                    </Row>
                </>
            ) : <Spinner animation="border" role="status">
                <span className="visually-hidden">Chargement...</span>
            </Spinner>
            }

            {realisationShowing != null && (
                <Modal show={realisationShowing != null} onHide={() => setRealisationShowing(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{realisationShowing.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {realisationShowing.files.map((image, i) => <Image key={i} className='mw-100 image-fluid' src={image.file_url} />)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setRealisationShowing(null)}>
                            Fermer
                        </Button>
                    </Modal.Footer>
                </Modal>
            )
            }

        </DashboardLayout>
    )
}

export default Dashboard