export default function GradesPage({ params }: { params: { cid: string } }) {
  return <div>Grades of course {params.cid}</div>;
}
