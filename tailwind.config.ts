import type { Config } from "tailwindcss";

/** Только `class`: `dark:` срабатывает при `.dark` на DOM, не по ОС. */
const config = {
  darkMode: "class",
} satisfies Config;

export default config;
