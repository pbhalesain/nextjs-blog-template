
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { humanize } from "@/lib/textconverter";
import { cn } from "@/lib/utils";
import Link from "next/link";


type CardProps = React.ComponentProps<typeof Card>

export function BlogTags({ className, ...props }: CardProps) {

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
    <Card className={cn( className)} {...props}>
      <CardHeader>
        <CardTitle>Tags</CardTitle>
       
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className=" flex items-center space-x-4 rounded-md border-2 bg-slate-200 p-4">
         
          <div className="flex-1 space-y-1">
         
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
          </div>
          
        </div>
      
      </CardContent>
      
    </Card>
  )
}
