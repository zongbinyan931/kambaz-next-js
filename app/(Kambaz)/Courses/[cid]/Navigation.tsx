"use client";
import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const { cid } = useParams<{ cid: string }>();
  const pathname = usePathname();

  const mk = (path: string) => `/Courses/${cid}${path}`;
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");

  const item = (href: string, id: string, label: string) => (
    <Link
      href={href}
      id={id}
      className={`list-group-item border-0 ${
        isActive(href) ? "active" : "text-danger"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {item(mk("/Home"), "wd-course-home-link", "Home")}
      {item(mk("/Modules"), "wd-course-modules-link", "Modules")}
      {item(mk("/Piazza"), "wd-course-piazza-link", "Piazza")}
      {item(mk("/Zoom"), "wd-course-zoom-link", "Zoom")}
      {item(mk("/Assignments"), "wd-course-assignments-link", "Assignments")}
      {item(mk("/Quizzes"), "wd-course-quizzes-link", "Quizzes")}
      {item(mk("/People/Table"), "wd-course-people-link", "People")}
      {item(mk("/Grades"), "wd-course-grades-link", "Grades")}
      {item(mk("/Settings"), "wd-course-settings-link", "Settings")}
    </div>
  );
}
