"use client";

import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

const courses = [
  {
    code: "CS1234",
    title: "React JS",
    img: "/images/reactjs.jpg",
    desc: "Full Stack software developer",
  },
  {
    code: "CS4550",
    title: "Web Dev",
    img: "/images/reactjs.jpg",
    desc: "Client/Server, REST, MongoDB",
  },
  {
    code: "CS5610",
    title: "Web Tools",
    img: "/images/reactjs.jpg",
    desc: "Next.js, Bootstrap, TS",
  },
  {
    code: "CS5004",
    title: "OOP",
    img: "/images/reactjs.jpg",
    desc: "Java, design principles",
  },
  {
    code: "CS5800",
    title: "Algorithms",
    img: "/images/reactjs.jpg",
    desc: "Greedy, DP, graphs",
  },
  {
    code: "CS5500",
    title: "SE",
    img: "/images/reactjs.jpg",
    desc: "Process & testing",
  },
  {
    code: "CS5200",
    title: "DB Systems",
    img: "/images/reactjs.jpg",
    desc: "SQL, ER, indexing",
  },
  // add more if you want
];

export default function DashboardPage() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((c) => (
            <Col
              key={c.code}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href="/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    variant="top"
                    src={c.img}
                    width="100%"
                    height={160}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.code} {c.title}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.desc}
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
