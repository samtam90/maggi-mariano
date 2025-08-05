import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Benevento",
  canonical: links.servizi["spurgo-fosse-biologiche"]["benevento"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Benevento", 
    locationNames: {label: "Benevento", href: "benevento"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["benevento"],
      name: "Benevento",
  }),
});
