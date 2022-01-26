import React, { Suspense } from "react";
import Loading from "../MatxLoading/MatxLoading";

const Loadable = (Component) =>
  function (props) {
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
