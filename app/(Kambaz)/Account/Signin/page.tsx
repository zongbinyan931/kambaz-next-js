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

      <Button
        id="wd-signin-btn"
        as={Link}
        href="/Account/Profile"
        variant="primary"
        className="w-100 mb-2"
      >
        Signin
      </Button>

      <Link id="wd-signup-link" href="/Account/Signup">
        Signup
      </Link>
    </div>
  );
}
