import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="Home">Home</Link>
      <br />
      <Link href="Modules">Modules</Link>
      <br />
      <Link href="Piazza">Piazza</Link>
      <br />
      <Link href="Zoom">Zoom</Link>
      <br />
      <Link href="Assignments">Assignments</Link>
      <br />
      <Link href="Quizzes">Quizzes</Link>
      <br />
      <Link href="Grades">Grades</Link>
      <br />
      <Link href="People">People</Link>
      <br />
    </div>
  );
}
