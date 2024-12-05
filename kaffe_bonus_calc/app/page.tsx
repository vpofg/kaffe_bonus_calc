import Navbar from "@/components/global/navbar";
import { InputWithLabel } from "@/components/global/numericInput";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Navbar/>
      </main>
  );
}
