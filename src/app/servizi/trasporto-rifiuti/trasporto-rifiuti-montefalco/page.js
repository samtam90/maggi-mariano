import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montefalco",
  canonical: links.servizi["trasporto-rifiuti"]["montefalco"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
