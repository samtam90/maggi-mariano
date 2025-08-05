import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Subbiano",
  canonical: links.servizi["spurgo-pozzi-neri"]["subbiano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
