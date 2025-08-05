import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Poggiodomo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["poggiodomo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
