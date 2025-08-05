import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Rigutino",
  canonical: links.servizi["trasporto-rifiuti"]["rigutino"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
