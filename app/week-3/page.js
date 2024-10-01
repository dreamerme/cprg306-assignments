import ItemList from "./item-list";

export const metadata = {
    title: 'Shopping List',
    description: 'Shopping List',
  };

export default function Page() {
  return (
    <main className="bg-slate-950 text-white">
      <h2 className="text-3xl font-bold m-2">Shopping List</h2>
      <ItemList />
    </main>
  );
}