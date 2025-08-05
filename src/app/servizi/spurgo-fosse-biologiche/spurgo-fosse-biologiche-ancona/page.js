import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ancona",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ancona"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ancona", 
    locationNames: {label: "Ancona", href: "ancona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["ancona"],
      name: "Ancona",
  }),
});
