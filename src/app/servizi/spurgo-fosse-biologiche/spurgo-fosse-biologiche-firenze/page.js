import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/firenze.json";
import appConfig, { links } from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Firenze",
  canonical: links.servizi["spurgo-fosse-biologiche"].firenze,
});
export default withBaseProps({
  title: "Spurgo fosse biologiche Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["spurgo-fosse-biologiche"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di spurgo fosse biologiche in tutti i comuni della provincia di
        Firenze:
      </span>
    ),
  },
});
