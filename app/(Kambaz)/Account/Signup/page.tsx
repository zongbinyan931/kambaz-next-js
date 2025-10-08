"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4" style={{ maxWidth: 360 }}>
      <h1 className="mb-3">Signup</h1>

      <Form.Control
        id="wd-new-username"
        placeholder="username"
        className="mb-2"
      />
      <Form.Control
        id="wd-new-password"
        placeholder="password"
        type="password"
        className="mb-3"
      />
      <Link
        id="wd-signup-btn"
        href="/Account/Profile"
        className="w-100 d-block mb-2"
      >
        <Button variant="primary" className="w-100">
          Signup
        </Button>
      </Link>

      <Link id="wd-signin-link" href="/Account/Signin">
        Signin
      </Link>
    </div>
  );
}
