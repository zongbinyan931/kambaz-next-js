"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Button,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Badge,
} from "react-bootstrap";
import { BsPlus, BsSearch, BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

type Params = { cid: string };

export default function Assignments({ params }: { params: Params }) {
  const { cid } = params;

  const items = useMemo(
    () => [
      {
        id: "A1",
        title: "A1 — HTML",
        modules: "Multiple Modules",
        notAvailableUntil: "May 13 at 12:00am",
        due: "May 13 at 11:59pm",
        points: 100,
      },
      {
        id: "A2",
        title: "A2 — CSS Layout",
        modules: "Multiple Modules",
        notAvailableUntil: "May 13 at 12:00am",
        due: "May 20 at 11:59pm",
        points: 100,
      },
      {
        id: "A3",
        title: "A3 — Bootstrap",
        modules: "Multiple Modules",
        notAvailableUntil: "May 13 at 12:00am",
        due: "May 27 at 11:59pm",
        points: 100,
      },
    ],
    []
  );

  return (
    <div id="wd-assignments" className="p-3">
      <div className="wd-toolbar mb-3">
        <div className="float-end">
          <Button variant="danger" className="ms-2">
            <BsPlus className="me-1" />
            Assignment
          </Button>
          <Button variant="secondary">
            <BsPlus className="me-1" />
            Group
          </Button>
        </div>

        <div style={{ maxWidth: 360 }}>
          <InputGroup>
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <Form.Control placeholder="Search for Assignment" />
          </InputGroup>
        </div>
        <div className="clear-both" />
      </div>

      <div className="wd-group-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center fw-semibold text-uppercase">
          <BsGripVertical className="me-2 fs-5" />
          Assignments
        </div>
        <div className="d-flex align-items-center gap-2">
          <Badge bg="light" text="dark" className="fw-semibold">
            40% of Total
          </Badge>
          <IoEllipsisVertical className="fs-4 text-secondary" />
        </div>
      </div>

      <ListGroup className="rounded-0 mt-2">
        {items.map((a) => (
          <ListGroupItem
            key={a.id}
            className="wd-row d-flex align-items-start justify-content-between"
          >
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-4 text-secondary flex-shrink-0" />
              <div>
                <Link
                  href={`/Courses/${cid}/Assignments/${a.id}`}
                  className="text-decoration-none fw-bold fs-5 text-dark"
                >
                  {a.title}
                </Link>
                <div className="wd-meta">
                  <span className="text-danger">{a.modules}</span>
                  <span className="mx-2">|</span>
                  <span className="text-muted">
                    Not available until {a.notAvailableUntil}
                  </span>
                  <span className="mx-2">|</span>
                  <span className="text-muted">
                    Due {a.due} &nbsp; | &nbsp; {a.points} pts
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <FaCheckCircle className="text-success fs-5" title="Published" />
              <IoEllipsisVertical className="fs-4 text-secondary" />
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
