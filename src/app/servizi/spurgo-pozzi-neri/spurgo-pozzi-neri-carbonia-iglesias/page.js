import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Carbonia Iglesias",
  canonical: links.servizi["spurgo-pozzi-neri"]["carbonia-iglesias"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["carbonia-iglesias"],
      name: "Carbonia Iglesias",
  }),
});
