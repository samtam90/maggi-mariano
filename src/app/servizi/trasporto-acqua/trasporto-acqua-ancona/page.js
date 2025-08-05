import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Ancona",
  canonical: links.servizi["trasporto-acqua"]["ancona"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Ancona", 
    locationNames: {label: "Ancona", href: "ancona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["ancona"],
      name: "Ancona",
  }),
});
