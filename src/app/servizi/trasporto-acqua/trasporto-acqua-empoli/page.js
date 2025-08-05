import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Empoli",
  canonical: links.servizi["trasporto-acqua"]["empoli"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Empoli", 
    locationNames: {label: "Empoli", href: "empoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
