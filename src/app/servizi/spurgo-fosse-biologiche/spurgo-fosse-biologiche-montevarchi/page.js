import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montevarchi",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montevarchi"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
