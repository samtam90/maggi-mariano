import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rigutino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["rigutino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
