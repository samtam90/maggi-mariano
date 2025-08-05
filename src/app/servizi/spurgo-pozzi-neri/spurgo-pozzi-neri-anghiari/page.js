import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Anghiari",
  canonical: links.servizi["spurgo-pozzi-neri"]["anghiari"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
