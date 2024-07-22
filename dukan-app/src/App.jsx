import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-3 p-2">
      <RevenueCard
        title={"Amount Deposited"}
        amount={"2,12,030.00"}
      ></RevenueCard>
      <RevenueCard
        title={"Amount Pending"}
        amount={"92,898.09"}
        orderCount={13}
      ></RevenueCard>
      <RevenueCard title={"Total Amount"} amount={"3,89,321"}></RevenueCard>
    </div>
  );
}

export default App;
