import UserProfile from "../components/UserProfile";


// Define the User interface
interface User {
  id: string;
  name: string;
  email: string;
  addresses: string[];
  orders: { id: string; date: string }[];
}

export default function ProfilePage() {
  // Create a user object
  const user: User = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    addresses: ["123 Main St", "456 Elm St"],
    orders: [
      { id: "order1", date: "2023-01-01" },
      { id: "order2", date: "2023-01-02" }
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <UserProfile user={user} />
    </div>
  );
}