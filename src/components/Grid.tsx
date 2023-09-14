
export default function () {
  const items = [
    {
      title: "Profile",
      src: "/profile.png",
      alt: "profile",
      color: "#ffbe76",
    },
    {
      title: "Employment History",
      src: "/employment-history.png",
      alt: "employment history",
      color: "#7ed6df",
    },
    {
      title: "Education",
      src: "/education.png",
      alt: "education",
      color: "#ff7979",
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
            index === 1 ? "bg-center-asymmetrical" : ""
          } bg-[${item.color}] cursor-pointer`}
        />
      ))}
    </div>
  );
}
