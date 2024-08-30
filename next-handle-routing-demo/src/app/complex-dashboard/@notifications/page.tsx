import Card from "@/components/card";
import Link from "next/link";

const UsersNotification = () => {
  return (
    <Card>
      <div>Users Notifications</div>
      <Link href={"/complex-dashboard/archived"}>Archived</Link>
    </Card>
  );
};
export default UsersNotification;
