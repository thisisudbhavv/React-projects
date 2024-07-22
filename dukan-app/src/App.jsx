import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-4">
      <RevenueCard
        title={"Amount Pending"}
        amount={"92,89,321.90"}
        orderCount={13}
      ></RevenueCard>
    </div>
  );
}

export default App;
