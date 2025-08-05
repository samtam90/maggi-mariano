import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Piegaro",
  canonical: links.servizi["spurgo-fosse-biologiche"]["piegaro"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
