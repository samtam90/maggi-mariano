import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Fiesole",
  canonical: links.servizi["trasporto-rifiuti"]["fiesole"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
