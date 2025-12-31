import type { FC } from "hono/jsx";
import type { Context } from "../context";

export const Navbar: FC<{ context: Context }> = ({ context }) => {
  return (
    <nav>
      <div>
        <li>
          <a href="/">LPDB</a>
        </li>
      </div>

      <div>
        {context.userId ? (
          <>
            <li>
              <a href="/submit">submit</a>
            </li>

            <li>
              <a href="/auth/logout">log out</a>
            </li>
          </>
        ) : (
          <li>
            <a href="/auth/login">log in</a>
          </li>
        )}
      </div>
    </nav>
  );
};
