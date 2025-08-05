import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Savona",
  canonical: links.servizi["spurgo-pozzi-neri"]["savona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Savona", 
    locationNames: {label: "Savona", href: "savona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["savona"],
      name: "Savona",
  }),
});
