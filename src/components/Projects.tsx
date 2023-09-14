import Section from "./Section";

export default function Projects() {
  const projects = [
    {
      title: "Facebook Clone",
      description: "A Web cloned from Facebook",
    },
    {
      title: "Webshop",
      description: "An E-commercial shop",
    },
    {
      title: "Weather App",
      description: "Local weather forecast",
    },
    {
      title: "Toco Flashcard",
      description: "Create, study, share flashcards",
    },
    {
      title: "Blog",
      description: "Make Friends. Share Ideas",
    },
    {
      title: "Photography",
      description: "Display your photography",
    },
  ];

  return (
    <Section title="Projects">
      <div className="grid gap-x-20 gap-y-5 grid-flow-row grid-cols-1 md:grid-cols-2">
        {projects.map((item, index) => (
          <div key={index}>
            <div className="cursor-pointer hover:underline">{item.title}</div>
            <div className="opacity-50">{item.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
