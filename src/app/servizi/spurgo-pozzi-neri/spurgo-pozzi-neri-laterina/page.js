import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Laterina",
  canonical: links.servizi["spurgo-pozzi-neri"]["laterina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Laterina", 
    locationNames: {label: "Laterina", href: "laterina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
