function Banner() {
  return (
    <div className="banner h-screen w-screen bg-repeat bg-cover bg-center bg-blend-darken flex flex-col items-center justify-start pt-10 sm:pt-0 sm:items-end sm:pr-16 sm:justify-center">
        <div className="banner-font text-stone-100 text-2xl sm:text-4xl">Hello, I'm <span className="text-teal-500">Colin Chung.</span></div>
        <div className="banner-font text-stone-100 text-1xl sm:text-2xl">I'm a full-stack software developer.</div>
    </div>
  );
}

export default Banner;
