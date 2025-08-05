import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri San Godenzo",
  canonical: links.servizi["spurgo-pozzi-neri"]["san-godenzo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
