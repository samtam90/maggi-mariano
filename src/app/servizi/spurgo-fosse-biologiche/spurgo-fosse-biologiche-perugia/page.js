import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/perugia.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Perugia",
});
export default withBaseProps({
  title: "Spurgo fosse biologiche Perugia",
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["spurgo-fosse-biologiche"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutte
        i comuni della provincia di Perugia:
      </span>
    ),
  },
});
