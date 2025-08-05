import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Piancastagnaio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["piancastagnaio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Piancastagnaio", 
    locationNames: {label: "Piancastagnaio", href: "piancastagnaio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
