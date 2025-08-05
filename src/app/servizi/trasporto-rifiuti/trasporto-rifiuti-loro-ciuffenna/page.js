import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Loro ciuffenna",
  canonical: links.servizi["trasporto-rifiuti"]["loro-ciuffenna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
