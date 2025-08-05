import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Badia Prataglia",
  canonical: links.servizi["spurgo-pozzi-neri"]["badia-prataglia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
