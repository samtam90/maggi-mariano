import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montefalco",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montefalco"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
