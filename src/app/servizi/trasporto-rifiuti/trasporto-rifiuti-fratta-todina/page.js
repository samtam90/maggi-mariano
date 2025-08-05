import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fratta Todina",
  canonical: links.servizi["trasporto-rifiuti"]["fratta-todina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
