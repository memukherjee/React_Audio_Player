export default function Logo({ playing }) {
  return (
    <a
      href="https://www.youtube.com/@TaalpatarShepai"
      target="_blank"
      rel="noreferrer"
      style={{
        animationPlayState: playing ? "running" : "paused",
      }}
      className="hidden md:block w-16 h-16 absolute top-8 left-8 z-50 rounded-full overflow-hidden outline outline-1 outline-white outline-offset-4 animate-spin-slow hover:[scale:1.05] transition-all duration-300"
    >
      <img
        className="w-full h-full object-cover"
        src="/images/logo.jpg"
        alt="logo"
      />
    </a>
  );
}
