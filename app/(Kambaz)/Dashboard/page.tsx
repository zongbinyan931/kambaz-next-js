import Link from "next/link";
import Image from "next/image";

const courses = [
  { id: "1234", code: "CS1234", name: "React JS" },
  { id: "5610", code: "CS5610", name: "Web Development" },
  { id: "5800", code: "CS5800", name: "Algorithms" },
  { id: "5010", code: "CS5010", name: "Program Design" },
  { id: "5200", code: "CS5200", name: "DB Systems" },
  { id: "6220", code: "CS6220", name: "Data Mining" },
  { id: "5770", code: "CS5770", name: "Cloud Computing" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ padding: 16 }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div
        id="wd-dashboard-courses"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {courses.map((c) => (
          <div
            key={c.id}
            className="wd-dashboard-course"
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <Link
              href={`/Courses/${c.id}`}
              className="wd-dashboard-course-link"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Image
                src="/images/reactjs.jpg"
                alt="course cover"
                width={200}
                height={150}
              />
              <div style={{ padding: 12 }}>
                <h5 style={{ margin: 0 }}>
                  {c.code} {c.name}
                </h5>
                <p
                  className="wd-dashboard-course-title"
                  style={{ marginTop: 8 }}
                >
                  Full Stack software developer
                </p>
                <button>Go</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
