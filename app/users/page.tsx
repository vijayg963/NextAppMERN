import Link from "next/link";
import Button from "@/components/button";
import Customer from "@/components/customer";

const getCustomers = async () => {
  const res = await fetch("http://localhost:3000/api/customers", {
    cache: "no-cache",
  });
  return res.json();
};

async function Customers() {
  const { data } = await getCustomers();
  return (
    <main>
      <Link href={"/"}>
        <Button>Go to home</Button>
      </Link>

      <div className="cards">
        {data?.map((customer: any, i: number) => (
          <Customer key={i} customer={customer} />
        ))}
      </div>
    </main>
  );
}

export default Customers;
