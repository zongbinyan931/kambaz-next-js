export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;

  return (
    <div id="wd-assignments-editor" style={{ maxWidth: 920 }}>
      <h2 style={{ marginBottom: 12 }}>
        Course {cid} — Edit Assignment {aid}
      </h2>

      {/* Title */}
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        style={{ width: 600 }}
      />
      <br />
      <br />

      {/* Description */}
      <label htmlFor="wd-description">Description</label>
      <br />
      <textarea
        id="wd-description"
        rows={8}
        style={{ width: 600 }}
        defaultValue={`The assignment is available online Submit a link to the landing page of
your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kambaz application
• Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
      />
      <br />

      {/* Form table */}
      <table cellPadding={6}>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} style={{ width: 120 }} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Complete/Incomplete">Complete/Incomplete</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
                <option value="No Submission">No Submission</option>
              </select>
            </td>
          </tr>

          {/* Online entry options */}
          <tr>
            <td align="right" valign="top">
              Online Entry Options
            </td>
            <td>
              <div>
                <input id="wd-text-entry" type="checkbox" />{" "}
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input id="wd-website-url" type="checkbox" defaultChecked />{" "}
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input id="wd-media-recordings" type="checkbox" />{" "}
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input id="wd-student-annotation" type="checkbox" />{" "}
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </div>
              <div>
                <input id="wd-file-upload" type="checkbox" />{" "}
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </td>
          </tr>

          {/* Assign & dates */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2025-05-13" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2025-05-06"
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2025-05-27"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
