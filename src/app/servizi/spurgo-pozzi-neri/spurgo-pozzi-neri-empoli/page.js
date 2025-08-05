import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Empoli",
  canonical: links.servizi["spurgo-pozzi-neri"]["empoli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Empoli", 
    locationNames: {label: "Empoli", href: "empoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
