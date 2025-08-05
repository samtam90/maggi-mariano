import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Foiano in Valdichiana",
  canonical: links.servizi["spurgo-pozzi-neri"]["foiano-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Foiano in Valdichiana", 
    locationNames: {label: "Foiano in Valdichiana", href: "foiano-in-valdichiana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
