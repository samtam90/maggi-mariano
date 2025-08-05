import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Galeata",
  canonical: links.servizi["spurgo-fosse-biologiche"]["galeata"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Galeata", 
    locationNames: {label: "Galeata", href: "galeata"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
