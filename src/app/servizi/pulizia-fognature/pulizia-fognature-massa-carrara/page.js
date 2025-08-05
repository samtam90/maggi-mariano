import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Massa-Carrara",
  canonical: links.servizi["pulizia-fognature"]["massa-carrara"],
});
export default withBaseProps({
  title: "Pulizia fognature Massa-Carrara",
  locationNames: { label: "Massa-Carrara", href: "massa-carrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["massa-carrara"],
      name: "Massa-Carrara",
  }),
});
