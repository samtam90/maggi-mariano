import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Meldola",
  canonical: links.servizi["spurgo-pozzi-neri"]["meldola"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Meldola", 
    locationNames: {label: "Meldola", href: "meldola"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
