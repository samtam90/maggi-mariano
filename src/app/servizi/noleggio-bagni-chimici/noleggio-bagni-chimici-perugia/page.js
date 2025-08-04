import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/perugia.json";
import appConfig, { links } from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Perugia",
  canonical: links.servizi["noleggio-bagni-chimici"].perugia,
});
export default withBaseProps({
  title: "Noleggio bagni chimici Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["noleggio-bagni-chimici"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di noleggio bagni chimici in tutti i comuni della provincia di
        Perugia:
      </span>
    ),
  },
});
