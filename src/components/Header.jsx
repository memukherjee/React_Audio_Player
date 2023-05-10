export default function Header() {
  const commonClasses =
    "text-4xl lg:text-7xl font-bold tracking-[.06rem] font-display uppercase";
  return (
    <div
      className={`p-4 relative min-h-[200px] text-center bg-[url('./assets/torn-paper-brown.svg')] bg-bottom bg-no-repeat z-10 bg-cover [transform-style:preserve-3d]
    before:content-[''] before:absolute before:top-3/4 before:left-0 before:w-full before:h-24 before:bg-[url('./assets/torn-paper-white.svg')] before:bg-bottom before:bg-[length:110%] before:[transform:translateZ(-1px)]
    `}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute top-0 -left-20 lg:left-0"
      >
        <text
          className={
            commonClasses + " stroke-text thicker stroke-black stroke-[28]"
          }
          x="30%"
          y="50%"
        >
          Taalpatar
        </text>
        <text
          className={commonClasses + " stroke-text stroke-[20] stroke-white"}
          x="30%"
          y="50%"
        >
          Taalpatar
        </text>
        <text
          className={
            commonClasses + " stroke-text stroke-[1] stroke-black fill-primary"
          }
          x="30%"
          y="50%"
        >
          Taalpatar
        </text>
      </svg>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute -bottom-20 left-0 lg:right-12"
      >
        <text
          className={
            commonClasses + " stroke-text thicker stroke-black stroke-[28]"
          }
          x="60%"
          y="50%"
        >
          Shepai
        </text>
        <text
          className={commonClasses + " stroke-text stroke-[20] stroke-white"}
          x="60%"
          y="50%"
        >
          Shepai
        </text>
        <text
          className={
            commonClasses + " stroke-text stroke-[1] stroke-black fill-primary"
          }
          x="60%"
          y="50%"
        >
          Shepai
        </text>
      </svg>
    </div>
  );
}
