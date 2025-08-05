import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Parma",
  canonical: links.servizi["spurgo-fosse-biologiche"]["parma"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Parma", 
    locationNames: {label: "Parma", href: "parma"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["parma"],
      name: "Parma",
  }),
});
