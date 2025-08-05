import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Acquasparta",
  canonical: links.servizi["trasporto-acqua"]["acquasparta"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Acquasparta", 
    locationNames: {label: "Acquasparta", href: "acquasparta"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
