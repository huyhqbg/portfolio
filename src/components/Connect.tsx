import Image from "next/image";
import Section from "./Section";

export default function Connect() {
  return (
    <Section title="Connect">
      <ul className="flex gap-5">
        {["Email", "Twitter", "Github"].map((item, index) => (
          <li
            key={index}
            className="flex h-[25px] items-center cursor-pointer transition-opacity duration-300 hover:opacity-50"
          >
            <span>{item}</span>
            <Image
              src="/connect.svg"
              alt="connect.svg"
              className="ml-1"
              width={19}
              height={19}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
