import Link from "next/link";

import { BlogCard } from "@/components/blog/blogcard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { humanize } from "@/lib/textconverter";


export default  function BlogPage() {
  const blogPosts = [
    {
      title: "Building a Responsive UI with Tailwind CSS",
      description:
        "Learn how to create a responsive user interface using Tailwind CSS utility classes.",
      author: {
        name: "John Doe",
        avatar: "/avatars/john-doe.png",
      },
      publishedAt: "2023-04-01T00:00:00.000Z",
      readingTime: "5 min read",
      tags: ["CSS", "Tailwind CSS", "Responsive Design"],
      slug: "building-a-responsive-ui-with-tailwind-css",
    },
    {
      title: "Building a Responsive UI with Tailwind CSS",
      description:
        "Learn how to create a responsive user interface using Tailwind CSS utility classes.",
      author: {
        name: "John Doe",
        avatar: "/avatars/john-doe.png",
      },
      publishedAt: "2023-04-01T00:00:00.000Z",
      readingTime: "5 min read",
      tags: ["CSS", "Tailwind CSS", "Responsive Design"],
      slug: "building-a-responsive-ui-with-tailwind-css",
    },
    // Add more blog post objects here
  ];
  const categories: string[] = [
    'Technology',
    'Programming',
    'Web Development',
    'React',
    'Angular',
    'Vue.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Ruby',
  ];
  const allCategories: string[] = [
    'Technology',
    'Programming',
    'Web Development',
    'React',
    'Angular',
    'Technology',
    'Programming',
    'Web Development',
    'React',
    'Angular',
   
  ];
  const tags: string[] = [
    'Technology',
    'Programming',
    'Web Development',
    'React',
    'Angular',
    'Vue.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Ruby',
    'PHP',
    'Java',
    'C#',
    'Swift',
    'Kotlin',
    'Mobile Development',
    'iOS',
    'Android',
    'Databases',
    'SQL',
    'NoSQL',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Cloud Computing',
    'AWS',
    'Azure',
    'Google Cloud',
    'DevOps',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Agile',
    'Scrum',
    'Project Management',
    'Design Patterns',
    'Data Structures',
    'Algorithms',
    'Machine Learning',
    'Artificial Intelligence',
    'Natural Language Processing',
    'Computer Vision',
    'Cybersecurity',
    'Ethical Hacking',
    'Blockchain',
    'Cryptocurrency',
    'Internet of Things',
    'Serverless',
    'Jamstack',
    'Static Site Generators',
    'Headless CMS',
    'Microservices',
    'API Development',
    'GraphQL',
    'REST',
    'Game Development',
    'Unity',
    'Unreal Engine',
    'Productivity',
    'Coding Tips',
    'Career Advice',
    'Freelancing',
    'Remote Work',
  ];
  
  return (
    <div className="flex min-h-screen w-11/12 flex-col m-auto">
  
      <main className="flex flex- flex-col gap-4 p-2 md:gap-8 md:p-4">
        <div className="grid gap-1 w-auto m-auto md:gap-2">
              <div className="text-4xl font-bold">Blog</div>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <Card className="p-2">
          {blogPosts.slice(0, Math.ceil(blogPosts.length / 2)).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}</Card>
          <Card className="p-2">
          {blogPosts.slice(0, Math.ceil(blogPosts.length / 2)).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
          </Card>
          <Card className="p-2">
          {blogPosts.slice(0, Math.ceil(blogPosts.length / 2)).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}</Card>
  
          <Card className="p-2">
          {blogPosts.slice(0, Math.ceil(blogPosts.length / 2)).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
            
          </Card>
          
          </Card>
         

          <Card>
            <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
            <ul className="space-y-4">
            {categories.map((category: string) => {
              const count = allCategories.filter(
                (c: string) => c === category,
              ).length;
              return (
                <li key={category}>
                  <Link
                    className="flex justify-between hover:text-primary dark:hover:text-darkmode-primary"
                    href={`/categories/${category}`}
                  >
                    {humanize(category)} <span>({count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>
            </CardContent>
            </Card>
            <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
            <ul>
            {tags.map((tag: string) => {
              return (
                <li className="inline-block" key={tag}>
                  <Link
                    className="m-1 block rounded bg-white px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-body dark:hover:bg-darkmode-primary dark:hover:text-dark"
                    href={`/tags/${tag}`}
                  >
                    {humanize(tag)}
                  </Link>
                </li>
              );
            })}
          </ul>
            </CardContent>
            </Card>
          </Card>
        </div>
      </main>
    </div>
  )
}
