import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Livorno",
  canonical: links.servizi["pulizia-fognature"]["livorno"],
});
export default withBaseProps({
  title: "Pulizia fognature Livorno",
  locationNames: { label: "Livorno", href: "livorno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["livorno"],
      name: "Livorno",
  }),
});
