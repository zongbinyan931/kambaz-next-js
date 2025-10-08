"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-4" style={{ maxWidth: 360 }}>
      <h1 className="mb-3">Signin</h1>

      <Form.Control id="wd-username" placeholder="username" className="mb-2" />
      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-3"
      />

      <Link
        id="wd-signin-btn"
        href="/Account/Profile"
        className="w-100 d-block mb-2"
      >
        <Button variant="primary" className="w-100">
          Signin
        </Button>
      </Link>

      <Link id="wd-signup-link" href="/Account/Signup">
        Signup
      </Link>
    </div>
  );
}
