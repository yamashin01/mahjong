import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PageHeader() {
  return (
    <div className="md:flex md:justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">新規対局設定</h1>
      <div className="mt-4 md:mt-0 text-right">
        <Link href="/">
          <Button variant="outline">トップページに戻る</Button>
        </Link>
      </div>
    </div>
  );
}
