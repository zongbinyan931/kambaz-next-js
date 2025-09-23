export default function QuizzesPage({ params }: { params: { cid: string } }) {
  return <div>Quizzes of course {params.cid}</div>;
}
