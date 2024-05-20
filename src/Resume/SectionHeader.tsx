export default function SectionHeader({ title = "title" }) {
  return (
    <h2 className="text-xl font-bold uppercase border-b border-gray-400">
      {title}
    </h2>
  );
}
