import { Card, CardBody, Image, Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import rocket from "../../public/images/rocket.svg";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Card fullWidth>
          <CardBody data-testid="welcome-copy">
            <p className="text-sm uppercase font-bold">
              Welcome to mission control, {session.user?.name}!
            </p>
            <p className="text-tiny">
              The eagle has landed. Navigate through the tabs to view all the
              current people in space, information on their respective
              spacecrafts, and the current location of the ISS!
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
      ) : (
        <Card className="w-full flex p-3">
          <Spinner className="mx-auto" color="secondary" size="lg" />
        </Card>
      )}
    </>
  );
}
