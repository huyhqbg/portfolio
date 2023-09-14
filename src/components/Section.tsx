export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-[900px] my-[30px]">
      <div className="mb-[10px] text-lg font-semibold opacity-30">{title}</div>
      <div className="mt-[10px] text-lg font-normal">{children}</div>
    </section>
  );
}
