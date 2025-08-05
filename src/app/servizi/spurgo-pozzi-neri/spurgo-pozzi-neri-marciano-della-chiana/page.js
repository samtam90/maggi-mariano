import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Marciano della Chiana",
  canonical: links.servizi["spurgo-pozzi-neri"]["marciano-della-chiana"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
