import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sestino",
  canonical: links.servizi["spurgo-pozzi-neri"]["sestino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sestino", 
    locationNames: {label: "Sestino", href: "sestino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
