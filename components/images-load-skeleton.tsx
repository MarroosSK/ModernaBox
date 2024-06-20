import { Loader2 } from "lucide-react";
import { Card } from "./ui/card";

export default function ImagesLoad() {
  return (
    <Card className="fixed inset-0 z-30 flex items-center justify-center overflow-hidden bg-black/90">
      <Loader2 className="animate-spin text-white z-40" />
    </Card>
  );
}
