/**
 * Renders one or more JSON-LD objects into a <script> tag.
 * Server component — safe to drop anywhere in a page.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data)
    ? data.length === 1
      ? data[0]
      : data
    : data;

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is trusted (built from our own typed data)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
