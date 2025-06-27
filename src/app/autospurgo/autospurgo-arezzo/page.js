import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import comuni from "../../../../.data/comuni/arezzo.json";
import appConfig from "../../../../app.config";
import { makeNavGridItems } from "../../../misc/functions";
import React from "react";

export const metadata = getMetadata({ title: "Autospurgo Arezzo" });
export default withBaseProps({
  title: "Autospurgo Arezzo",
  locationsData: {
    items: makeNavGridItems(comuni, appConfig.links.autospurgo),
    title: (
      <span>
        Tramite le nostre due sedi di Poppi e di Arezzo <br /> Operiamo in tutte
        i comuni della provincia di Arezzo:
      </span>
    ),
  },
});
