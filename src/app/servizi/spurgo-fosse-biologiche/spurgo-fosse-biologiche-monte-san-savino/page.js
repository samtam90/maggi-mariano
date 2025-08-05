import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monte San Savino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["monte-san-savino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
