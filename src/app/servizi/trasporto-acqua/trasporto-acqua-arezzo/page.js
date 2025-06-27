import { withBaseProps } from "../page";
import comuni from "../../../../../.data/comuni/arezzo.json";
import appConfig from "../../../../../app.config";
import React from "react";
import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../frantoio-mobile-inerti/page";

export const metadata = getMetadata({
  title: "Trasporto acqua Arezzo",
});
export default withBaseProps({
  title: "Trasporto acqua Arezzo",
  locationsData: {
    items: makeNavGridItems(comuni, appConfig.links.servizi["trasporto-acqua"]),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutte
        i comuni della provincia di Arezzo:
      </span>
    ),
  },
});
