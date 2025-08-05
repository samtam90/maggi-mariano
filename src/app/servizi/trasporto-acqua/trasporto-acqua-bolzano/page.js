import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Bolzano",
  canonical: links.servizi["trasporto-acqua"]["bolzano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["bolzano"],
      name: "Bolzano",
  }),
});
