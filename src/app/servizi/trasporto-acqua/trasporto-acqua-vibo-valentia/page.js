import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Vibo Valentia",
  canonical: links.servizi["trasporto-acqua"]["vibo-valentia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["vibo-valentia"],
      name: "Vibo Valentia",
  }),
});
