import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Badia Prataglia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["badia-prataglia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
