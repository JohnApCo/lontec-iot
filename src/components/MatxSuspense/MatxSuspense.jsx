import React, { Suspense } from "react";
import { MatxLoading } from "app/components";

function MatxSuspense({ children }) {
  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
}

export default MatxSuspense;
