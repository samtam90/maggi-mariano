import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Fabro",
  canonical: links.servizi["spurgo-pozzi-neri"]["fabro"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Fabro", 
    locationNames: {label: "Fabro", href: "fabro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
