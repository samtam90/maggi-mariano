import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Poggiodomo",
  canonical: links.servizi["spurgo-pozzi-neri"]["poggiodomo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
