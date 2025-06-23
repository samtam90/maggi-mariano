import React, { memo } from "react";
import AuxTemplate from "../auxiliary/AuxTemplate";

function AltMainContent({ mobile }) {
  return <AuxTemplate mobile={mobile}></AuxTemplate>;
}

export default memo(AltMainContent);
