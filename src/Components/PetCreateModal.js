import { useState } from "react";
import petStore from "../stores/petStore";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function PetCreateModal() {
  const [show, setShow] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newPet);
    petStore.addPet(newPet);
    handleClose();
  };

  const handleChange = (event) => {
    setNewPet({ ...newPet, [event.target.name]: event.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="name"
                name="name"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pet Type</Form.Label>
              <Form.Control
                type="type"
                placeholder="cat, dog, rabbit"
                name="type"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pet Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="image"
                name="image"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );

  //   render(<Example />);
}
