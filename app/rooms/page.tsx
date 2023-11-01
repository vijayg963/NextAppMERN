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
      <Button>
        <Link href={"/dashboard"}>Go to Dashborard</Link>
      </Button>

      <div className="cards">
        {data?.map((customer: any) => (
          <Customer customer={customer} />
        ))}
      </div>
    </main>
  );
}

export default Customers;
