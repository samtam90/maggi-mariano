import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Piegaro",
  canonical: links.servizi["trasporto-acqua"]["piegaro"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
