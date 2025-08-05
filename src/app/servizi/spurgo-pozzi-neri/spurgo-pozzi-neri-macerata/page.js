import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Macerata",
  canonical: links.servizi["spurgo-pozzi-neri"]["macerata"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Macerata", 
    locationNames: {label: "Macerata", href: "macerata"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["macerata"],
      name: "Macerata",
  }),
});
