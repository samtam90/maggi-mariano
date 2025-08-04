import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/firenze.json";
import appConfig, { links } from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../page";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Firenze",
  canonical: links.servizi["frantoio-mobile-inerti"].firenze,
});
export default withBaseProps({
  title: "Frantoio mobile inerti Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["frantoio-mobile-inerti"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> rendiamo
        disponibile il nostro frantoio mobile inerti in tutti i comuni della
        provincia di Firenze:
      </span>
    ),
  },
});
