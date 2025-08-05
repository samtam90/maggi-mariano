import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cagliari",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cagliari"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["cagliari"],
      name: "Cagliari",
  }),
});
