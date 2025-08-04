import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/firenze.json";
import appConfig, { links } from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Pulizia fognature Firenze",
  canonical: links.servizi["pulizia-fognature"].firenze,
});
export default withBaseProps({
  title: "Pulizia fognature Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["pulizia-fognature"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di pulizia fognature in tutti i comuni della provincia di
        Firenze:
      </span>
    ),
  },
});
