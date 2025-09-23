import Link from "next/link";
export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a id="wd-neu-link" href="https://www.northeastern.edu/" target="_blank">
        Northeastern
      </a>
      <br />
      <Link id="wd-account-link" href="/Account">
        Account
      </Link>
      <br />
      <Link id="wd-dashboard-link" href="/Dashboard">
        Dashboard
      </Link>
      <br />
      <Link id="wd-course-link" href="/Dashboard">
        Courses
      </Link>
      <br />
      <Link id="wd-calendar-link" href="/Calendar">
        Calendar
      </Link>
      <br />
      <Link id="wd-inbox-link" href="/Inbox">
        Inbox
      </Link>
      <br />
      <Link id="wd-labs-link" href="/Labs">
        Labs
      </Link>
      <br />
    </div>
  );
}
