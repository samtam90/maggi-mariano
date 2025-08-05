import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ravenna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ravenna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
