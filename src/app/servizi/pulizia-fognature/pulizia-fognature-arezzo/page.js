import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/arezzo.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Pulizia fognature Arezzo",
});
export default withBaseProps({
  title: "Pulizia fognature Arezzo",
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["pulizia-fognature"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutte
        i comuni della provincia di Arezzo:
      </span>
    ),
  },
});
