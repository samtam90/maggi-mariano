import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pescara",
  canonical: links.servizi["pulizia-fognature"]["pescara"],
});
export default withBaseProps({
  title: "Pulizia fognature Pescara",
  locationNames: { label: "Pescara", href: "pescara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["pescara"],
      name: "Pescara",
  }),
});
