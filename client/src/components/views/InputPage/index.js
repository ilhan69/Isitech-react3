import { useState } from "react"
import { Alert, Button, Form, Modal, Table } from "react-bootstrap"
import { Input, Label } from "reactstrap"
import DashboardLayout from "../../layouts/DashboardLayout"
import WheelFortune from "./WheelFortune"

const InputPage = () => {

    const [addGroupModal, setAddGroupModal] = useState(false)
    const [groups, setGroups] = useState([])

    const [membersGroup, setMembersGroup] = useState('')
    const [colorGroup, setColorGroup] = useState('')
    const handleAddGroup = () => {
        const newGroup = {
            option: membersGroup, style: { backgroundColor: colorGroup }
        }
        setGroups([...groups, newGroup])
        setColorGroup('')
        setMembersGroup('')
        setAddGroupModal(false)
    }
    const handleDeleteGroup = (option) => {
        const newGroup = groups.filter(group => group.option !== option)
        setGroups(newGroup)
    }

    return (
        <DashboardLayout title='Tirage au sort'>

            <div className="d-flex justify-content-center">
                <div>
                    <p className="h3">Liste des groupes existants</p>
                </div>
                {' '}
                <div className="mx-5">
                    <Button onClick={() => setAddGroupModal(true)} size="md">Ajouter un groupe</Button>
                </div>
            </div>
            <Table className="mt-3" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Groupe</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map((group, i) => {
                        return (
                            <tr key={i}>
                                <td># {i}</td>
                                <td>{group.option}</td>
                                <td>
                                    <Button onClick={() => handleDeleteGroup(group.option)} variant='danger'>Supprimer</Button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>

            {groups.length > 0 ?
                <div className="d-flex flex-column align-items-center">
                    {/* <WheelFortune groups={groups} /> */}
                    <p>Roue de la fortune indisponible car le package n'était pas maintenu :-(</p>
                </div>
                : <Alert>Ajoutez des groupes pour faire un tirage au sort</Alert>
            }

            <Modal show={addGroupModal} onHide={() => setAddGroupModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un groupe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Label>Membres du groupe</Label>
                    <Input type='text' onChange={e => setMembersGroup(e.target.value)} placeholder="Prénoms" />
                    <hr />
                    <Label>Couleur du groupe</Label>
                    <Form.Control
                        type="color"
                        defaultValue="#563d7c"
                        onChange={e => setColorGroup(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setAddGroupModal(false)}>
                        Fermer
                    </Button>
                    <Button variant="success" onClick={handleAddGroup}>
                        Enregistrer
                    </Button>
                </Modal.Footer>
            </Modal>
        </DashboardLayout>
    )
}

export default InputPage