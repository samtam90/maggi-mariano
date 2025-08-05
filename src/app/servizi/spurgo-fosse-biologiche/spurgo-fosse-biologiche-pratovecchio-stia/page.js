import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pratovecchio Stia",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pratovecchio-stia"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
