import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Buonconvento",
  canonical: links.servizi["spurgo-fosse-biologiche"]["buonconvento"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Buonconvento", 
    locationNames: {label: "Buonconvento", href: "buonconvento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
