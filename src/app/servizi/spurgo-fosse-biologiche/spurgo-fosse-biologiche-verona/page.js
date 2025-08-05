import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Verona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["verona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Verona", 
    locationNames: {label: "Verona", href: "verona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["verona"],
      name: "Verona",
  }),
});
