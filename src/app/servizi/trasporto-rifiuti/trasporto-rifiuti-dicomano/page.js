import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Dicomano",
  canonical: links.servizi["trasporto-rifiuti"]["dicomano"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
