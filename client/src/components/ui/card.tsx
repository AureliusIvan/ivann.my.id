import {
    forwardRef,
    HTMLAttributes,
} from "react"
import {cn} from "@/lib/utils"

const Card = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                `rounded-[2rem] border-[1px] border-neutral-50 
                dark:border-none backdrop-blur-2xl 
                bg-white/30 dark:bg-white/10 shadow-sm 
                dark:text-neutral-50 `,
                className
            )}
            {...props}
        />
    );
})
Card.displayName = "Card"

const CardHeader = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
    return (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5 p-6", className)}
            {...props}
        />
    );
})
CardHeader.displayName = "CardHeader"


const CardTitle = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLHeadingElement>
>(({className, ...props}, ref) => {
    return (
        <h3
            ref={ref}
            className={cn(
                "text-2xl font-semibold leading-none tracking-tight",
                className
            )}
            {...props}
        />
    );
})
CardTitle.displayName = "CardTitle"


const CardDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({className, ...props}, ref) => {
    return (
        <p
            ref={ref}
            className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
            {...props}
        />
    );
})
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
    return (
        <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    );
})
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => {
    return (
        <div
            ref={ref}
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    );
})
CardFooter.displayName = "CardFooter"

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent
}