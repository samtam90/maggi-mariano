import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Spello",
  canonical: links.servizi["pulizia-fognature"]["spello"],
});
export default withBaseProps({
  title: "Pulizia fognature Spello",
  locationNames: { label: "Spello", href: "spello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
