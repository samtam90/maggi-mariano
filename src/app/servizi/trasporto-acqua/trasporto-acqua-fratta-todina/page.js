import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Fratta Todina",
  canonical: links.servizi["trasporto-acqua"]["fratta-todina"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
