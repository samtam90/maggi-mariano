import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Imperia",
  canonical: links.servizi["trasporto-acqua"]["imperia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Imperia", 
    locationNames: {label: "Imperia", href: "imperia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});
