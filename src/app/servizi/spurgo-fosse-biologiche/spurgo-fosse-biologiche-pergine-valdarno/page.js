import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Pergine Valdarno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["pergine-valdarno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
