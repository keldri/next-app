
import Link from "next/link";
import { ticketsPath } from "@/paths";

const Homepage = () => {
  return (
    <div>
      <h2 className="text-lg">Home Page</h2>
      <Link href={"/tickets"} className="underline">
          Go to Tickets
      </Link>
    </div>
  );
}

export default Homepage;