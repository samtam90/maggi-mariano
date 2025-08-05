import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Casole d'Elsa",
  canonical: links.servizi["spurgo-fosse-biologiche"]["casole-d-elsa"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Casole d'Elsa", 
    locationNames: {label: "Casole d'Elsa", href: "casole-d-elsa"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
