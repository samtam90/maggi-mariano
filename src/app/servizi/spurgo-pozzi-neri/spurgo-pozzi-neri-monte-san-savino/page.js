import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monte San Savino",
  canonical: links.servizi["spurgo-pozzi-neri"]["monte-san-savino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
