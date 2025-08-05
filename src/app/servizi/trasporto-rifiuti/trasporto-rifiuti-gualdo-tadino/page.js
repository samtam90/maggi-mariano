import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gualdo Tadino",
  canonical: links.servizi["trasporto-rifiuti"]["gualdo-tadino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
