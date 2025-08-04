import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/perugia.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Pulizia fognature Perugia",
});
export default withBaseProps({
  title: "Pulizia fognature Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["pulizia-fognature"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di pulizia fognature in tutti i comuni della provincia di
        Perugia:
      </span>
    ),
  },
});
