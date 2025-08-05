import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castelnuovo Berardenga",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castelnuovo-berardenga"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castelnuovo Berardenga", 
    locationNames: {label: "Castelnuovo Berardenga", href: "castelnuovo-berardenga"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
