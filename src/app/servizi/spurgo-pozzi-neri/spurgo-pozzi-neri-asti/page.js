import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Asti",
  canonical: links.servizi["spurgo-pozzi-neri"]["asti"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Asti", 
    locationNames: {label: "Asti", href: "asti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["asti"],
      name: "Asti",
  }),
});
