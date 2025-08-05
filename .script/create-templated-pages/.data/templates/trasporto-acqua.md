import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua [name]",
  canonical: links.servizi["trasporto-acqua"]["[path]"]
});
export default withBaseProps({ 
    title: "Trasporto acqua [name]", 
    locationNames: {label: "[name]", href: "[path]"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});
