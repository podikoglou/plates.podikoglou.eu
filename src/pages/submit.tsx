import { format } from "date-fns";
import type { FC } from "hono/jsx";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";

export const SubmitPage: FC = () => {
  const date = format(new Date(), "yyyy-MM-dd'T'HH:mm");

  return (
    <Layout>
      <Navbar />

      <h1>Submit License Plate</h1>

      <form action="/submit" method="post">
        <div>
          {/* country */}
          <label for="country-code">Country Code:</label>

          <input
            type="text"
            id="country-code"
            name="country-code"
            maxlength={4}
          />
        </div>

        <div>
          {/* EU */}
          <label for="eu">EU:</label>

          <input type="checkbox" id="eu" name="eu" />
        </div>

        <div>
          {/* text */}
          <label for="text">Text:</label>

          <input type="text" id="text" name="text" />
        </div>

        <div>
          {/* date */}
          <label for="date">Date:</label>

          <input type="datetime-local" id="date" name="date" value={date} />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </Layout>
  );
};
