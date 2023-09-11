import { Card, CardBody, Image } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import rocket from "../../public/images/rocket.svg";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <Card fullWidth>
        <CardBody>
          <p className="text-sm uppercase font-bold">
            Welcome to mission control, {session?.user?.name}!
          </p>
          <p className="text-tiny">
            The eagle has landed. Navigate through the tabs to view all the
            current people in space and their respective spacecrafts and the
            current location of the ISS!
          </p>
        </CardBody>
        <div className="d-flex">
          <Image
            alt="rocket"
            removeWrapper
            className="object-cover mx-auto"
            width={600}
            src={rocket.src}
          />
        </div>
      </Card>
    </>
  );
}
