import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Catania",
  canonical: links.servizi["pulizia-fognature"]["catania"],
});
export default withBaseProps({
  title: "Pulizia fognature Catania",
  locationNames: { label: "Catania", href: "catania" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
