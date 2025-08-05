import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Camucia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["camucia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Camucia", 
    locationNames: {label: "Camucia", href: "camucia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
