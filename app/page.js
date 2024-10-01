import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li className="hover:text-green-400 hover:underline"><Link href="/week-2"> Week 2 Assignments</Link></li>
        <li className="hover:text-green-400 hover:underline"><Link href="/week-3"> Week 3 Assignments</Link></li>
      </ul>
    </main>
  );
}
