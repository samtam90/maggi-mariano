import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Penna in Teverina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["penna-in-teverina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Penna in Teverina", 
    locationNames: {label: "Penna in Teverina", href: "penna-in-teverina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
