import { Outlet } from "react-router-dom";

export const Layout = (): JSX.Element => {
  return (
    <>
      <header>
        <h1>ROBOT APP</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
