import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castel San Niccolò",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castel-san-niccolo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
