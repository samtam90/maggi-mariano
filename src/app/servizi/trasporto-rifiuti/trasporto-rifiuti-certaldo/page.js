import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Certaldo",
  canonical: links.servizi["trasporto-rifiuti"]["certaldo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
