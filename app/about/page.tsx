import Link from "next/link";
import Button from "../components/button";
import RoomCard from "@/components/roomCard";

const getDetails = async () => {
  const res = await fetch("http://localhost:3000/api/airbnb", {
    cache: "no-cache",
  });
  console.log(res);
  return res.json();
};

export default async function About() {
  const { data } = await getDetails();
  console.log("data", data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        <Link href={"/"}>Go to Home</Link>
      </Button>

      <div className="cards">
        {data?.map((room: any, i: number) => (
          <Link key={i} href={"/room/:id"}>
            <RoomCard room={room} />
          </Link>
        ))}
      </div>
    </main>
  );
}
