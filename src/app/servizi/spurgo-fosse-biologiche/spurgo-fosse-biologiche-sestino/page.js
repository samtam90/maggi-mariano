import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Sestino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["sestino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Sestino", 
    locationNames: {label: "Sestino", href: "sestino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
