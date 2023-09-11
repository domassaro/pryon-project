import Layout from "@/components/layout";
import { Card, CardBody } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <Layout>
        <Card fullWidth>
          <CardBody>
            <p>Welcome to your mission control, {session?.user?.name}!</p>
          </CardBody>
        </Card>
      </Layout>
    </>
  );
}
