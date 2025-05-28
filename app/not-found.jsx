import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>we couldn't find the page you're looking for.</p>
      <p>
        Go back to the <Link href="/">dashboard</Link>.
      </p>
    </main>
  );
}
