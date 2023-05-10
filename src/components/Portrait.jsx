export default function Portrait({ title }) {
  return (
    <div className="absolute inset-0 z-10 w-full text-center">
      <h1 key={title} className="block z-20 lg:hidden text-3xl md:text-5xl text-white font-semibold font-cursive absolute top-[40%] left-1/2 -translate-x-1/2 animate-pulse">
        {title}
      </h1>
      <div className="hidden lg:block absolute top-[40%] left-1/2 -translate-x-1/2 w-full">
        <svg
          key={title}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="150px"
          className="title text-6xl font-semibold font-cursive text-center"
        >
          <text
            className={"stroke-white stroke-[0.5] fill-white"}
            alignmentBaseline="middle"
            textAnchor="middle"
            x="50%"
            y="50%"
          >
            {title}
          </text>
        </svg>
      </div>
      <div className="absolute h-[420px] lg:h-auto bottom-0 left-4 lg:left-24">
        <img
          className="w-full h-full object-contain"
          src="/images/pritam.png"
          alt="Pritam"
        />
      </div>
      <div className="absolute h-[420px] lg:h-auto bottom-0 right-4 lg:right-24">
        <img
          className="w-full h-full object-contain"
          src="/images/suman.png"
          alt="Suman"
        />
      </div>
    </div>
  );
}
