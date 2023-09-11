import Layout from "@/components/layout";
import Map from "@/components/Map/";

export default function Location() {
  return (
    <>
      <Layout>
        <div className="block w-full">
          <p className="text-tiny uppercase font-bold pb-2">
            Where is ISS now?
          </p>
          <Map />
        </div>
      </Layout>
    </>
  );
}
