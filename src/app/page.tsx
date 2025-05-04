
import Link from "next/link";
import { Heading } from "@/components/heading";
import { ticketsPath } from "@/paths";

const Homepage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
      <Heading title="Home Page" description="Welcome to the homepage!" /> 
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