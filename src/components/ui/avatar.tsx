import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import * as React from "react"

const avatarVariants = cva(
  "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"

const AvatarImageVariants = cva("object-cover", {
  variants: {
    variant: {
      default: "",
      fallback: "bg-gray-300 dark:bg-gray-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof AvatarImageVariants> {}

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn(AvatarImageVariants({ variant }), className)}
        {...props}
      />
    )
  }
)

AvatarImage.displayName = "AvatarImage"

const AvatarFallbackVariants = cva("flex h-full w-full items-center justify-center", {
  variants: {
    variant: {
      default: "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300",
      primary: "bg-primary-500 text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof AvatarFallbackVariants> {}

export const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(AvatarFallbackVariants({ variant }), className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

AvatarFallback.displayName = "AvatarFallback"