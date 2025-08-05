import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Vibo Valentia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["vibo-valentia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["vibo-valentia"],
      name: "Vibo Valentia",
  }),
});
