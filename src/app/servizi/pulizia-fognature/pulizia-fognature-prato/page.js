import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Prato",
  canonical: links.servizi["pulizia-fognature"]["prato"],
});
export default withBaseProps({
  title: "Pulizia fognature Prato",
  locationNames: { label: "Prato", href: "prato" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["prato"],
      name: "Prato",
  }),
});
