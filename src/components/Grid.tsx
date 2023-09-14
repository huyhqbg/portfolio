export default function Grid() {
  const items = [
    {
      title: "Profile",
      src: "/profile.png",
      alt: "profile",
    },
    {
      title: "Employment History",
      src: "/employment-history.png",
      alt: "employment history",
    },
    {
      title: "Education",
      src: "/education.png",
      alt: "education",
    },
  ];

  const divStyle = (src: string) => ({
    backgroundImage: `url('http://localhost:3000/${src}')`,
  });

  return (
    <div className="w-full max-w-[900px] my-[30px] py-[50px] grid grid-cols-3 gap-[15px]">
      {items.map((item, index) => (
        <div
          key={index}
          style={divStyle(item.src)}
          className={`w-full h-full pt-[100%] rounded-[20px] bg-60% bg-center bg-no-repeat ${
            index === 0
              ? "bg-profile"
              : index === 1
              ? "bg-center-asymmetrical bg-employment"
              : index === 2
              ? "bg-education"
              : ""
          } cursor-pointer group relative overflow-hidden`}
        >
          <div className="w-full h-full top-0 absolute rounded-[20px] group-hover:bg-[#00000091] transition-all duration-500" />
          <div className="absolute hidden transition-all duration-500 sm:block bottom-0 left-[10%] group-hover:bottom-[10%]">
            <div className="text-transparent group-hover:text-white transition-colors duration-500 font-semibold text-xl md:text-2xl">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
