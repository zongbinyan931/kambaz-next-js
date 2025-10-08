"use client";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4" style={{ maxWidth: 420 }}>
      <h1 className="mb-3">Profile</h1>

      <Form.Control
        id="wd-profile-username"
        defaultValue="alice"
        className="mb-2"
      />
      <Form.Control
        id="wd-profile-password"
        defaultValue="123"
        className="mb-2"
      />
      <Form.Control id="wd-firstname" defaultValue="Alice" className="mb-2" />
      <Form.Control
        id="wd-lastname"
        defaultValue="Wonderland"
        className="mb-2"
      />
      <Form.Control id="wd-dob" type="date" className="mb-2" />
      <Form.Control
        id="wd-email"
        defaultValue="alice@wonderland.com"
        className="mb-2"
      />
      <Form.Control id="wd-role" defaultValue="User" className="mb-3" />

      <Button id="wd-signout-btn" variant="danger" className="w-100">
        Signout
      </Button>
    </div>
  );
}
