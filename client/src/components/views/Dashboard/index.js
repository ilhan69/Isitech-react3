import axios from 'axios'
import { useEffect, useState } from "react"
import { Button, Card, Col, Image, Modal, Row, Spinner } from "react-bootstrap"
import DashboardLayout from "../../layouts/DashboardLayout"

import { CardBody, Input } from 'reactstrap'
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
            <p className='h3'>Découvrez des réalisations de la taverne du design</p>

            {dataList !== null ? (
                <>
                    <Input type='text' onChange={handleFilter} placeholder='Checher dans les réalisations...' />
                    <hr className='m-5' />
                    <Row>
                        {filteredData.map((d, i) => {
                            return (<Col onClick={() => setRealisationShowing(d)} className='p-1' key={i} md={3}>
                                <Card>
                                    <CardBody>
                                        <span>{d.name}</span>
                                    </CardBody>
                                </Card>
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
                        {realisationShowing.files.map((media, i) => {
                            if (media.file_type === 'VIDEO') {
                                return <video key={i} controls className='mw-100 image-fluid'>
                                    <source src={media.file_url}
                                        type="video/mp4" /></video>
                            } else if (media.file_type === 'YOUTUBE') {
                                return <iframe key={i} className='mw-100 image-fluid' title={media.name} src={media.file_url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            } else if (media.file_type === 'IMAGE') {
                                return <Image key={i} className='mw-100 image-fluid' src={media.file_url} />
                            } else {
                                return <></>
                            }
                        })}
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