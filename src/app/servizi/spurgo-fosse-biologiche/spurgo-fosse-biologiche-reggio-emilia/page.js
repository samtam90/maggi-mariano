import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Reggio Emilia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["reggio-emilia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["reggio-emilia"],
      name: "Reggio Emilia",
  }),
});
