import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/perugia.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Perugia",
});
export default withBaseProps({
  title: "Spurgo pozzi neri Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["spurgo-pozzi-neri"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di spurgo pozzi neri in tutti i comuni della provincia di
        Perugia:
      </span>
    ),
  },
});
