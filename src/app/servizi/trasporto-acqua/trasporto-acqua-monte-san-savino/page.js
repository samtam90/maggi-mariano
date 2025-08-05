import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Monte San Savino",
  canonical: links.servizi["trasporto-acqua"]["monte-san-savino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
