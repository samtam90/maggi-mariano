import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Medio Campidano",
  canonical: links.servizi["spurgo-fosse-biologiche"]["medio-campidano"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["medio-campidano"],
      name: "Medio Campidano",
  }),
});
