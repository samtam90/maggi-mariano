import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Badia Tedalda",
  canonical: links.servizi["spurgo-fosse-biologiche"]["badia-tedalda"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
