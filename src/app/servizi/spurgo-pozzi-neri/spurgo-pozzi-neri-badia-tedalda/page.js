import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Badia Tedalda",
  canonical: links.servizi["spurgo-pozzi-neri"]["badia-tedalda"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
