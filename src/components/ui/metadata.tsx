import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import * as React from "react"

const metadataVariants = cva(
  "flex items-center space-x-2 font-medium text-sm",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        secondary: "text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface MetadataProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof metadataVariants> {
  children: React.ReactNode
}

export const Metadata = React.forwardRef<HTMLDivElement, MetadataProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(metadataVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Metadata.displayName = "Metadata"