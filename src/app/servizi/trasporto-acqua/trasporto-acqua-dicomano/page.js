import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Dicomano",
  canonical: links.servizi["trasporto-acqua"]["dicomano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
