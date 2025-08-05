import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ascoli Piceno",
  canonical: links.servizi["trasporto-rifiuti"]["ascoli-piceno"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["ascoli-piceno"],
      name: "Ascoli Piceno",
  }),
});
