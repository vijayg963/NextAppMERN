import Link from "next/link";
import Button from "../components/button";
import RoomCard from "@/components/roomCard";

const getDetails = async () => {
  const res = await fetch("http://localhost:3000/api/airbnb", {
    cache: "no-cache",
  });
  return res.json();
};

export default async function About() {
  const { data } = await getDetails();
  return (
    <main className=" min-h-screen justify-between ">
      <Link href={"/"}>
        <Button>Go to Home</Button>
      </Link>

      <div className="cards">
        {data?.map((room: any, i: number) => (
          <Link key={i} href={"/airbnb/:id"}>
            <RoomCard room={room} />
          </Link>
        ))}
      </div>
    </main>
  );
}
