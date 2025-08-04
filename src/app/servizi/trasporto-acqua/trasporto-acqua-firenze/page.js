import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/firenze.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Trasporto acqua Firenze",
});
export default withBaseProps({
  title: "Trasporto acqua Firenze",
  locationNames: { label: "Firenze", href: "firenze" },
  locationsData: {
    items: makeNavGridItems(comuni, appConfig.links.servizi["trasporto-acqua"]),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di trasporto acqua in tutti i comuni della provincia di
        Firenze:
      </span>
    ),
  },
});
