export default function HeroTransition() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 w-full max-w-7xl">
        <div className="flex flex-col justify-center px-12">
          <h1 className="text-7xl font-bold">
            research
            <br />
            scientist
          </h1>
          <p className="mt-6 text-gray-500 text-lg">
            AI, BCI, machine learning and intelligent systems.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-gray-200" />
        </div>

        <div className="flex flex-col justify-center px-12">
          <h1 className="text-7xl font-bold text-right">
            backend
            <br />
            engineer
          </h1>
          <p className="mt-6 text-gray-500 text-lg text-right">
            APIs, cloud infrastructure, distributed systems and data platforms.
          </p>
        </div>
      </div>
    </section>
  );
}