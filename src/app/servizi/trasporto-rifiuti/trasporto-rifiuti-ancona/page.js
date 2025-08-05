import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ancona",
  canonical: links.servizi["trasporto-rifiuti"]["ancona"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ancona", 
    locationNames: {label: "Ancona", href: "ancona"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["ancona"],
      name: "Ancona",
  }),
});
