import { makeNavGridItems } from "@/misc/functions";
import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import comuni from "../../../../.data/comuni/perugia.json";
import appConfig from "../../../../app.config";
import React from "react";

export const metadata = getMetadata({ title: "Autospurgo Perugia" });
export default withBaseProps({
  title: "Autospurgo Perugia",
  locationsData: {
    items: makeNavGridItems(comuni, appConfig.links.autospurgo),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutte
        i comuni della provincia di Perugia:
      </span>
    ),
  },
});
