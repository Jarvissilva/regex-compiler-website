import Link from "next/link";

export function P({ children, styles }) {
  return (
    <p
      className={`text-[clamp(1rem,5vw,1.25rem)] font-normal space-y-4 leading-loose ${styles}`}
    >
      {children}
    </p>
  );
}
export function H1({ children }) {
  return (
    <h1 className="text-[clamp(1.7rem,5vw,2.7rem)] capitalize font-black leading-tight">
      {children}
    </h1>
  );
}
export function H2({ children }) {
  return (
    <h2 className="text-[clamp(1.7rem,5vw,2rem)] text-blue-950 font-extrabold leading-tight">
      {children}
    </h2>
  );
}
export function H3({ children }) {
  return (
    <h3 className="text-[clamp(1.2rem,5vw,1.5rem)] font-bold">{children}</h3>
  );
}
export function H4({ children }) {
  return (
    <h3 className="text-[clamp(1rem,5vw,1.2rem)] font-extrabold">{children}</h3>
  );
}
export function UL({ children }) {
  return (
    <ul className="list-disc text-[clamp(1rem,5vw,1.2rem)] font-normal pl-8 space-y-3">
      {children}
    </ul>
  );
}
export function LI({ children }) {
  return <li>{children}</li>;
}
export function InternalLink({ children, href }) {
  return (
    <Link href={href} className="text-blue-500 hover:text-blue-300">
      {children}
    </Link>
  );
}
export function ExternalLink({ children, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-blue-500 hover:text-blue-300"
    >
      {children}
    </Link>
  );
}
export function Code({ children }) {
  return (
    <pre className="bg-black text-white p-5 rounded-md">
      <code className="whitespace-pre-wrap">{children}</code>
    </pre>
  );
}
