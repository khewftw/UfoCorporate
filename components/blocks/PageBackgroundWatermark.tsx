export function PageBackgroundWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <div className="flex max-w-5xl flex-col items-center gap-8 px-8 opacity-[0.10] md:gap-10 md:opacity-[0.12]">
        <img
          src="/logos/vector.svg"
          alt=""
          className="h-48 w-auto md:h-64 lg:h-80"
        />
        <p className="text-center text-base font-bold uppercase leading-snug tracking-wide text-[#111827] md:text-lg">
          Юридическая компания
          <br />
          Уральского федерального округа
        </p>
      </div>
    </div>
  );
}
