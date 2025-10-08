"use client";

import Modules from "../Modules/page";
import CourseStatus from "../Home/Status";

export default function CourseHome() {
  return (
    <div id="wd-courses">
      <div id="wd-home" className="d-flex flex-nowrap align-items-start">
        <div className="flex-fill me-3 min-w-0">
          <Modules />
        </div>
        <div className="d-none d-xl-block flex-shrink-0">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
