import CheckoutFlow from "../components/CheckoutFlow";
import Navbar_dark from "../components/Navbar_dark";
import Navbar_light from "../components/Navbar_light";


export default function CheckoutPage() {
  return (
    <div>
      <Navbar_dark/>
      <Navbar_light/>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <CheckoutFlow />
    </div>
    </div>
  );
}
