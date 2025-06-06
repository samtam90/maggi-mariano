import Link from "next/link";

export function renderHref(
  content,
  href,
  { target, className, "data-testid": testID }
) {
  return (
    <Link
      href={href}
      data-testid={testID}
      target={target}
      className={className}
    >
      {content}
    </Link>
  );
}
