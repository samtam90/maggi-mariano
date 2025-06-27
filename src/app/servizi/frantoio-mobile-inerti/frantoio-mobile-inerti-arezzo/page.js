import { getMetadata, withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/arezzo.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Arezzo" });
export default withBaseProps({
  title: "Frantoio mobile inerti Arezzo",
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["frantoio-mobile-inerti"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutte
        i comuni della provincia di Arezzo:
      </span>
    ),
  },
});
