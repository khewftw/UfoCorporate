export function PageBackgroundWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      <div className="flex max-w-3xl flex-col items-center gap-6 px-8 opacity-[0.05] md:gap-8">
        <img
          src="/logos/vector.svg"
          alt=""
          className="h-32 w-auto md:h-48"
        />
        <p className="text-center text-sm font-bold uppercase leading-snug tracking-wide text-[#111827] md:text-base">
          Юридическая компания
          <br />
          Уральского федерального округа
        </p>
      </div>
    </div>
  );
}
