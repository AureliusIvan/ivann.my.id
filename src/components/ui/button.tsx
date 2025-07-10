"use client"

import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"
import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
    {
      variants: {
        variant: {
          default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
          destructive:
              "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
          outline:
              "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
          secondary:
              "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
          ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
          link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, asChild = false, ...props}, ref) => {
      const Comp = asChild ? Slot : "button"
      return (
          <Comp
              className={cn(buttonVariants({variant, size, className}))}
              ref={ref}
              {...props}
          />
      )
    }
)
Button.displayName = "Button"

// LinkButtonProps extends ButtonProps and adds href, but HTMLAnchorElement attributes like href are already in ButtonHTMLAttributes
// We need to ensure 'href' is part of the props Link will receive.
import Link from "next/link";

interface LinkButtonProps extends ButtonProps {
  href: string;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    // If asChild is true, Link will pass its props to the child, which should handle them.
    // If asChild is false (default for this usage), Link itself is the component.
    // We want to style the Link component as a button.
    // The `buttonVariants` generates style classes.
    // Next.js Link component should be used for navigation.
    return (
      <Link href={href} passHref legacyBehavior={asChild ? undefined : true}>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...(asChild ? {} : { ...props })} // Spread props only if not asChild, Link handles props for its direct child if asChild
        />
      </Link>
    );
  }
);
LinkButton.displayName = "LinkButton";

// Helper for the above LinkButton, defining what Comp is.
// This was implicitly "a" before, now explicitly part of the Link structure.
const Comp = React.forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement>>(
  (props, ref) => {
    // If asChild was true and the child was <button>, this would need to be a button.
    // But for a simple Link styled as a button, it's an anchor.
    return <a ref={ref} {...props} />;
  }
);
Comp.displayName = "AnchorForLinkButton";


export {
  Button,
  LinkButton, // Export the corrected LinkButton
  buttonVariants
}
