import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri [name]",
  canonical: links.servizi["spurgo-pozzi-neri"]["[path]"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri [name]", 
    locationNames: {label: "[name]", href: "[path]"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});
