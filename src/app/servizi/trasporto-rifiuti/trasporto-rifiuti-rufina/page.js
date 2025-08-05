import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rufina",
  canonical: links.servizi["trasporto-rifiuti"]["rufina"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rufina", 
    locationNames: {label: "Rufina", href: "rufina"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
