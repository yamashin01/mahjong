import { PageHeader } from "@/components/PageHeader";
import { NewGameForm } from "./components/NewGameForm";

export default function NewGamePage() {
  return (
    <div className="bg-[url('/images/newGame-bgImage.jpg')] bg-cover bg-no-repeat min-h-screen">
      <div className="min-h-screen bg-white/80">
        <div className="p-8">
          <PageHeader />
          <NewGameForm />
        </div>
      </div>
    </div>
  );
}
