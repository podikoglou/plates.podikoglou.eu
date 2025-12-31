import type { FC } from "hono/jsx";
import { Layout } from "../layout";
import { Navbar } from "../components/navbar";
import type { Context } from "../context";

export const IndexPage: FC<{ context: Context }> = ({ context }) => {
  return (
    <Layout>
      <Navbar context={context} />

      <h1>Alex's license plates database</h1>
      <p>
        Here you can find a database of all the license plates I've spotted over
        the past few years.
      </p>
    </Layout>
  );
};
