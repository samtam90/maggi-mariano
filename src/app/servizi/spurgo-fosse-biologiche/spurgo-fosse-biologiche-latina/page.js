import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Latina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["latina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Latina", 
    locationNames: {label: "Latina", href: "latina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["latina"],
      name: "Latina",
  }),
});
