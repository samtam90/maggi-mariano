import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rufina",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rufina"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rufina", 
    locationNames: {label: "Rufina", href: "rufina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
