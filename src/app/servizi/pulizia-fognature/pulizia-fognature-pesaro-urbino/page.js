import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pesaro-Urbino",
  canonical: links.servizi["pulizia-fognature"]["pesaro-urbino"],
});
export default withBaseProps({
  title: "Pulizia fognature Pesaro-Urbino",
  locationNames: { label: "Pesaro-Urbino", href: "pesaro-urbino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["pesaro-urbino"],
      name: "Pesaro-Urbino",
  }),
});
