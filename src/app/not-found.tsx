import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-20 text-center max-w-md mx-auto space-y-6">
      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest block">
        404 &bull; Page Not Found
      </span>
      <h1 className="text-3xl font-serif text-zinc-950 font-normal">
        The requested resource does not exist.
      </h1>
      <p className="text-sm text-zinc-600 font-sans leading-relaxed">
        The page or case study you are looking for might have been moved or is currently being refined.
      </p>
      <div className="pt-4 flex justify-center gap-3">
        <Button href="/" icon={<ArrowLeft className="h-4 w-4" />}>
          Return Home
        </Button>
        <Button href="/work" variant="outline">
          Explore Projects
        </Button>
      </div>
    </div>
  );
}
