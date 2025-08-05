import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Chianciano Terme",
  canonical: links.servizi["frantoio-mobile-inerti"]["chianciano-terme"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Chianciano Terme",
  locationNames: { label: "Chianciano Terme", href: "chianciano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
