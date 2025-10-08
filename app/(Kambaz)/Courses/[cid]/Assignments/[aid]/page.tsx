"use client";

import Link from "next/link";
import { Button, Form, Row, Col, Badge } from "react-bootstrap";

type Params = { cid: string; aid: string };

export default function EditAssignment({ params }: { params: Params }) {
  const { cid, aid } = params;

  return (
    <div id="wd-edit-assignment" className="p-3" style={{ maxWidth: 920 }}>
      <h2 className="mb-4">{aid}</h2>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control defaultValue={aid} />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={9}
            className="wd-callout"
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Row className="g-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" defaultValue={100} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECTS</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-3 mt-1">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Display Grade as</Form.Label>
              <Form.Select defaultValue="Percentage">
                <option>Percentage</option>
                <option>Points</option>
                <option>Letter Grade</option>
                <option>Complete/Incomplete</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Submission Type</Form.Label>
              <Form.Select defaultValue="Online">
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
              </Form.Select>
            </Form.Group>

            <div className="wd-panel mt-2 p-3">
              <div className="fw-semibold mb-2">Online Entry Options</div>
              <Form.Check id="opt-text" label="Text Entry" />
              <Form.Check id="opt-url" label="Website URL" defaultChecked />
              <Form.Check id="opt-media" label="Media Recordings" />
              <Form.Check id="opt-annot" label="Student Annotation" />
              <Form.Check id="opt-file" label="File Uploads" />
            </div>
          </Col>
        </Row>

        <div className="wd-panel p-3 mt-4">
          <div className="fw-semibold mb-3">Assign</div>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Assign to</Form.Label>
                <div
                  className="form-control d-flex align-items-center flex-wrap"
                  style={{ minHeight: "calc(1.5em + .75rem + 2px)" }}
                >
                  <span className="badge bg-light text-dark border me-2">
                    Everyone
                  </span>
                </div>
              </Form.Group>
            </Col>
            <Col md={6} />

            <Col md={6}>
              <Form.Group>
                <Form.Label>Due</Form.Label>
                <Form.Control
                  type="datetime-local"
                  defaultValue="2024-05-13T23:59"
                />
              </Form.Group>
            </Col>
            <Col md={6} />

            <Col md={6}>
              <Form.Group>
                <Form.Label>Available from</Form.Label>
                <Form.Control
                  type="datetime-local"
                  defaultValue="2024-05-06T12:00"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Until</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>
            </Col>
          </Row>
        </div>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button
            as={Link}
            href={`/Courses/${cid}/Assignments`}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
