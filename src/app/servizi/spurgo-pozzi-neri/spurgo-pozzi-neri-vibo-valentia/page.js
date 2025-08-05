import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Vibo Valentia",
  canonical: links.servizi["spurgo-pozzi-neri"]["vibo-valentia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["vibo-valentia"],
      name: "Vibo Valentia",
  }),
});
