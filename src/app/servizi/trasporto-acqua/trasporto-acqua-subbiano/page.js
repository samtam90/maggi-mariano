import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Subbiano",
  canonical: links.servizi["trasporto-acqua"]["subbiano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
