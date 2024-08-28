import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotification = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href={"/complex-dashboard"}>Archived</Link>
    </Card>
  );
};
export default ArchivedNotification;
