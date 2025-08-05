import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Enna",
  canonical: links.servizi["spurgo-pozzi-neri"]["enna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Enna", 
    locationNames: {label: "Enna", href: "enna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["enna"],
      name: "Enna",
  }),
});
