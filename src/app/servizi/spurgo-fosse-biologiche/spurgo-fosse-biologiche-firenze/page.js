import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/firenze.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Firenze",
});
export default withBaseProps({
  title: "Spurgo fosse biologiche Firenze",
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["spurgo-fosse-biologiche"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutte
        i comuni della provincia di Firenze:
      </span>
    ),
  },
});
