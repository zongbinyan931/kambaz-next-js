"use client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const rows = [
    {
      first: "Tony",
      last: "Stark",
      id: "001234561S",
      sec: "S101",
      role: "STUDENT",
      lastAct: "2020-10-01",
      total: "10:21:32",
    },
    {
      first: "Bruce",
      last: "Wayne",
      id: "001234562W",
      sec: "S101",
      role: "TA",
      lastAct: "2020-10-03",
      total: "05:12:10",
    },
    {
      first: "Steve",
      last: "Rogers",
      id: "001234563R",
      sec: "S102",
      role: "STUDENT",
      lastAct: "2020-10-05",
      total: "07:45:00",
    },
    {
      first: "Natasha",
      last: "Romanoff",
      id: "001234564R",
      sec: "S102",
      role: "STUDENT",
      lastAct: "2020-10-06",
      total: "08:03:19",
    },
  ];
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{r.first}</span>{" "}
                <span className="wd-last-name">{r.last}</span>
              </td>
              <td>{r.id}</td>
              <td>{r.sec}</td>
              <td>{r.role}</td>
              <td>{r.lastAct}</td>
              <td>{r.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
