import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castelfranco Piandiscò",
  canonical: links.servizi["spurgo-fosse-biologiche"]["castelfranco-piandisco"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
