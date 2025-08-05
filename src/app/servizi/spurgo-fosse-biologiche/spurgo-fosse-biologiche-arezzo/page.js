import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Arezzo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["arezzo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Arezzo", 
    locationNames: {label: "Arezzo", href: "arezzo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
