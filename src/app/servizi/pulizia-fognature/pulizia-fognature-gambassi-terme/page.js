import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Gambassi Terme",
  canonical: links.servizi["pulizia-fognature"]["gambassi-terme"],
});
export default withBaseProps({
  title: "Pulizia fognature Gambassi Terme",
  locationNames: { label: "Gambassi Terme", href: "gambassi-terme" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
