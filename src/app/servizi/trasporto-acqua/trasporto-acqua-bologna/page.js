import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Bologna",
  canonical: links.servizi["trasporto-acqua"]["bologna"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Bologna", 
    locationNames: {label: "Bologna", href: "bologna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["bologna"],
      name: "Bologna",
  }),
});
