import { LangSwitcher } from "@/components/LangSwitcher/LangSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Navbar");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">{t("about")}</h1>
        <LangSwitcher />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
