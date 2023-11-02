import Button from "./components/button";
import Link from "next/link";

// function getServerSideProps({ context }: any) {
//   console.log(context);
// }

export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-between ">
      <nav>
        <Link href={"/users"}>
          <Button>Users Info Page</Button>
        </Link>
        <Link href={"/airbnb"}>
          <Button>Airbnb Page</Button>
        </Link>
      </nav>
      <div>Home</div>
    </main>
  );
}
