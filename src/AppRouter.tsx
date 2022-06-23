import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ViewPage from "./ViewPage";
import { RecoilRoot } from "recoil";
type AppRouteProps = {};

const AppRouter = (props: AppRouteProps) => {
  console.log(`APP_ROUTER`);
  const [path, setPath] = useState<Array<string>>([]);
  React.useEffect(() => {
    setPath(location.href.split("/"));
  }, []);

  return (
    <RecoilRoot>
      <ViewPage path={path[4]} />
    </RecoilRoot>
  );
};

export default AppRouter;
