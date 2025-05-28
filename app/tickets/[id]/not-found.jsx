import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wall.</h2>
      <p>we couldn't find the ticket you're looking for.</p>
      <p>
        Go back to all <Link href="/tickets">tickets</Link>.
      </p>
    </main>
  );
}
