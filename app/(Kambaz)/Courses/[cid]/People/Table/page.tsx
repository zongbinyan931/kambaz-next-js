export default function PeopleTablePage({
  params,
}: {
  params: { cid: string };
}) {
  return <div>People (table) of course {params.cid}</div>;
}
