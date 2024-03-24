import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import * as React from "react"
import ImageFallback from "../imagefallback"
import { Button } from "../ui/button"

interface BlogCardProps {
  title: string
  description: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  readingTime: string
  tags: string[]
  slug: string
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  author,
  publishedAt,
  readingTime,
  tags,
  slug,
}) => {
  return (
    <Card className="group"> 
    <CardContent  >
      <Card className="mt-2">
    <ImageFallback
          className="mb-6 w-full rounded"
          src={"/examples/bloginahe.png"}
          alt={title}
          width={100}
          height={20}
        /></Card>
</CardContent>
    <CardHeader>
        <CardTitle><a href={`/blog/${slug}`}>{title}</a></CardTitle>
        <CardDescription>
        {description}
      </CardDescription>
      </CardHeader>
    
    <CardFooter className="flex justify-between">
    {tags.map((tag) => (
          <Button key={tag} variant="ghost" className="px-2 py-1">
            {tag}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}