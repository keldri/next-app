
import Link from "next/link";
import { ticketsPath } from "@/paths";

const Homepage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
      <h2 className="text-3xl font-bold">Home Page</h2>
      <p className="text-sm text-muted-foreground">Your home place to start</p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={"/tickets"} className="text-sm underline">
            Go to Tickets
        </Link>
      </div>
    </div>
  );
}

export default Homepage;