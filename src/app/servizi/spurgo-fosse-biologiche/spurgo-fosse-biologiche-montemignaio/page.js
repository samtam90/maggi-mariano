import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montemignaio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montemignaio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
