"use client";
import { Form, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="container" style={{ maxWidth: 720 }}>
      <h2>Edit Assignment</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control placeholder="A1 – HTML" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Describe the assignment..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={100} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary">Save</Button>
      </Form>
    </div>
  );
}
