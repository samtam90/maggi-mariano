import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Piancastagnaio",
  canonical: links.servizi["trasporto-acqua"]["piancastagnaio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Piancastagnaio", 
    locationNames: {label: "Piancastagnaio", href: "piancastagnaio"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
