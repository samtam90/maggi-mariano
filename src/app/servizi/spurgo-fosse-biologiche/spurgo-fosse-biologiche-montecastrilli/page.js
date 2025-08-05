import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montecastrilli",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montecastrilli"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montecastrilli", 
    locationNames: {label: "Montecastrilli", href: "montecastrilli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
