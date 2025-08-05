import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bologna",
  canonical: links.servizi["trasporto-rifiuti"]["bologna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bologna", 
    locationNames: {label: "Bologna", href: "bologna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-rifiuti"],
      comuni: comuni["bologna"],
      name: "Bologna",
  }),
});
