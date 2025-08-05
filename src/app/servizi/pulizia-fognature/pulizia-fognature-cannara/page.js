import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cannara",
  canonical: links.servizi["pulizia-fognature"]["cannara"],
});
export default withBaseProps({
  title: "Pulizia fognature Cannara",
  locationNames: { label: "Cannara", href: "cannara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
