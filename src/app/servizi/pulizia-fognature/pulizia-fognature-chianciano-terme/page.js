import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Chianciano Terme",
  canonical: links.servizi["pulizia-fognature"]["chianciano-terme"],
});
export default withBaseProps({
  title: "Pulizia fognature Chianciano Terme",
  locationNames: { label: "Chianciano Terme", href: "chianciano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
