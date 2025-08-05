import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Imperia",
  canonical: links.servizi["trasporto-rifiuti"]["imperia"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Imperia", 
    locationNames: {label: "Imperia", href: "imperia"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["imperia"],
      name: "Imperia",
  }),
});
