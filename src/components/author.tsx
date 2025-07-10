import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { MonoglyphicFont } from "@/app/font/font";
import Image from "next/image";

interface AuthorProps {
  className?: string;
  name?: string;
  picture?: string;
  defaultName?: string;
  description?: string;
}

export function Author({
  className,
  name,
  picture,
  defaultName = "Anonymous",
  description = "A writer passionate about technology and life."
}: AuthorProps) {
  const displayName = name || defaultName;

  return (
    <div className="flex items-center gap-2">
      {picture && (
        <Image
          src={picture}
          alt={displayName}
          width={24}
          height={24}
          className="rounded-full"
        />
      )}
      <HoverCard openDelay={200}>
        <HoverCardTrigger
          className={cn(
            MonoglyphicFont.className,
            `tracking-wide cursor-pointer opacity-80 hover:opacity-60 underline`,
            className
          )}
        >
          by @{displayName}
        </HoverCardTrigger>
        <HoverCardContent
          className={cn(
            MonoglyphicFont.className,
            `tracking-wide text-opacity-80 no-underline font-light`
          )}
        >
          {description}
          {/* TODO: Consider making description dynamic if available from author object */}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
