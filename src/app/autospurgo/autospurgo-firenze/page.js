import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import comuni from "../../../../.data/comuni/firenze.json";
import appConfig from "../../../../app.config";
import React from "react";

export const metadata = getMetadata({ title: "Autospurgo Firenze" });
export default withBaseProps({
  title: "Autospurgo Firenze",
  locationsData: {
    items: makeNavGridItems(comuni, appConfig.links.autospurgo),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutte
        i comuni della provincia di Firenze:
      </span>
    ),
  },
});
