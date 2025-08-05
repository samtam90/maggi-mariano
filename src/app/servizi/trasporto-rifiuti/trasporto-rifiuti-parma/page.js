import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Parma",
  canonical: links.servizi["trasporto-rifiuti"]["parma"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Parma", 
    locationNames: {label: "Parma", href: "parma"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["parma"],
      name: "Parma",
  }),
});
