import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Scandicci",
  canonical: links.servizi["spurgo-fosse-biologiche"]["scandicci"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
