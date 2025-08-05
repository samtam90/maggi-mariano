import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Campi Bisenzio",
  canonical: links.servizi["trasporto-rifiuti"]["campi-bisenzio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
