import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/arezzo.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Arezzo",
});
export default withBaseProps({
  title: "Spurgo fosse biologiche Arezzo",
  locationNames: { label: "Arezzo", href: "arezzo" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["spurgo-fosse-biologiche"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> offriamo il
        servizio di spurgo fosse biologiche in tutti i comuni della provincia di
        Arezzo:
      </span>
    ),
  },
});
