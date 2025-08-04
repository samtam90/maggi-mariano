import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/arezzo.json";
import appConfig, { links } from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../page";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Arezzo",
  canonical: links.servizi["frantoio-mobile-inerti"].arezzo,
});
export default withBaseProps({
  title: "Frantoio mobile inerti Arezzo",
  locationNames: { label: "Arezzo", href: "arezzo" },
  locationsData: {
    items: makeNavGridItems(
      comuni,
      appConfig.links.servizi["frantoio-mobile-inerti"]
    ),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> rendiamo
        disponibile il nostro frantoio mobile inerti in tutti i comuni della
        provincia di Arezzo:
      </span>
    ),
  },
});
