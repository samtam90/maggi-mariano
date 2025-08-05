import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Rapolano Terme",
  canonical: links.servizi["frantoio-mobile-inerti"]["rapolano-terme"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Rapolano Terme",
  locationNames: { label: "Rapolano Terme", href: "rapolano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
