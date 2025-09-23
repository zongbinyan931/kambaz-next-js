import type { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { cid: string };
}) {
  const { cid } = params;
  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
      <hr />
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
