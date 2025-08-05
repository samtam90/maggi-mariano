import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ancona",
  canonical: links.servizi["spurgo-pozzi-neri"]["ancona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ancona", 
    locationNames: {label: "Ancona", href: "ancona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["ancona"],
      name: "Ancona",
  }),
});
