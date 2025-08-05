import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Montespertoli",
  canonical: links.servizi["trasporto-acqua"]["montespertoli"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
