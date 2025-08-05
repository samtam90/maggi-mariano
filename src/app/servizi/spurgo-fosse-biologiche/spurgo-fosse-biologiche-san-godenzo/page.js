import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche San Godenzo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["san-godenzo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
