import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fossato di Vico",
  canonical: links.servizi["trasporto-rifiuti"]["fossato-di-vico"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
