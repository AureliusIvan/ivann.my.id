import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {cn} from "@/lib/utils";
import {MonoglyphicFont} from "@/app/font/font";

export function Author({className}: { className?: string }) {
  return (
      <>
        <HoverCard
            openDelay={200}
        >
          <HoverCardTrigger
              className={cn(MonoglyphicFont.className, `tracking-wide cursor-pointer opacity-80 hover:opacity-60 underline`, className)}
          >
            by @Ivan
          </HoverCardTrigger>
          <HoverCardContent
              className={cn(MonoglyphicFont.className, `tracking-wide text-opacity-80 no-underline font-light`)}
          >
            A Software Engineer who loves to write about web development, technology, and life.
          </HoverCardContent>
        </HoverCard>
      </>
  )
}