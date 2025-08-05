import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Imperia",
  canonical: links.servizi["spurgo-pozzi-neri"]["imperia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Imperia", 
    locationNames: {label: "Imperia", href: "imperia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});
