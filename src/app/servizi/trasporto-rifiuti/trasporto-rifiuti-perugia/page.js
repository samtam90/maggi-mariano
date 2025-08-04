import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/perugia.json";
import appConfig, { links } from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Perugia",
  canonical: links.servizi["trasporto-rifiuti"].perugia,
});
export default withBaseProps({
  title: "Trasporto rifiuti Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["trasporto-rifiuti"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di trasporto rifiuti in tutti i comuni della provincia di
        Perugia:
      </span>
    ),
  },
});
