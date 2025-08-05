import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Bologna",
  canonical: links.servizi["spurgo-fosse-biologiche"]["bologna"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Bologna", 
    locationNames: {label: "Bologna", href: "bologna"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["bologna"],
      name: "Bologna",
  }),
});
