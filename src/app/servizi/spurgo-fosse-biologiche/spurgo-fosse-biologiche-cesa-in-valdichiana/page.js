import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cesa in valdichiana",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cesa-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
