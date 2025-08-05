import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Campello sul Clitunno",
  canonical: links.servizi["trasporto-acqua"]["campello-sul-clitunno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
