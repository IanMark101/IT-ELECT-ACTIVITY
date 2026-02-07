import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Projects() {
  return (
    <div className="flex justify-center mt-64">
      <Link href="/projects/taskManager">
        <Button className="cursor-pointer">Task Manager</Button>
      </Link>
    </div>
  );
}
