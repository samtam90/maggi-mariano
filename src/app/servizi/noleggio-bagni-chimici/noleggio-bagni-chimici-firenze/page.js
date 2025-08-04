import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/firenze.json";
import appConfig, { links } from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Firenze",
  canonical: links.servizi["noleggio-bagni-chimici"].firenze,
});
export default withBaseProps({
  title: "Noleggio bagni chimici Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["noleggio-bagni-chimici"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di noleggio bagni chimici in tutti i comuni della provincia di
        Firenze:
      </span>
    ),
  },
});
