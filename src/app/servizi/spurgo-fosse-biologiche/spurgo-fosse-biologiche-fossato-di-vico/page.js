import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Fossato di Vico",
  canonical: links.servizi["spurgo-fosse-biologiche"]["fossato-di-vico"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
