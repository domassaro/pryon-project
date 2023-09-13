import { Image } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import rocket from "../../public/images/rocket.svg";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <>
      <div
        data-testid="astronaut-wrapper"
        className="container flex flex-col gap-4 text-white"
      >
        <div className="flex gap-4">
          <div
            className="flex-1 p-3 items-center max-w-md break-words"
            data-testid="welcome-copy"
          >
            <p className="text-3xl uppercase font-bold py-2">
              Welcome to mission control <br /> {session?.user?.name}
            </p>
            <p className="text-2xl">
              The eagle has landed. Navigate through the tabs to view all the
              current people in space, information on their respective
              spacecrafts, and the current location of the ISS!
            </p>
          </div>
          <div>
            <div className="d-flex">
              <Image
                alt="rocket"
                removeWrapper
                className="object-cover mx-auto"
                width={600}
                src={rocket.src}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
