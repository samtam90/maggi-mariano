import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Greve in Chianti",
  canonical: links.servizi["spurgo-fosse-biologiche"]["greve-in-chianti"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
