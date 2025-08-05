import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Rapolano Terme",
  canonical: links.servizi["pulizia-fognature"]["rapolano-terme"],
});
export default withBaseProps({
  title: "Pulizia fognature Rapolano Terme",
  locationNames: { label: "Rapolano Terme", href: "rapolano-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
