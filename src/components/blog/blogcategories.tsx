
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableRow } from "../ui/table"


type CardProps = React.ComponentProps<typeof Card>

export function BlogCategorie({ className, ...props }: CardProps) {
  return (
    <Card className={cn( className)} {...props}>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
       
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className=" flex items-center space-x-4 rounded-md border-2 bg-slate-200 p-4">
         
          <div className="flex-1 space-y-1">
          <Table>
	  <TableBody>
		<TableRow>
			<TableCell> <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /></TableCell>
		<TableCell className="font-medium">Application</TableCell>
		<TableCell className="font-medium">(2)</TableCell>
		</TableRow>
		<TableRow>
			<TableCell> <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /></TableCell>
		<TableCell className="font-medium">Data</TableCell>
		<TableCell className="font-medium">(2)</TableCell>
		</TableRow>
		<TableRow>
			<TableCell> <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" /></TableCell>
		<TableCell className="font-medium">Technology</TableCell>
		<TableCell className="font-medium">(3)</TableCell>
		</TableRow>
		</TableBody>
		</Table>
          </div>
          
        </div>
       
      </CardContent>
      
    </Card>
  )
}
