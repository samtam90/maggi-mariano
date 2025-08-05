import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castel Viscardo",
  canonical: links.servizi["pulizia-fognature"]["castel-viscardo"],
});
export default withBaseProps({
  title: "Pulizia fognature Castel Viscardo",
  locationNames: { label: "Castel Viscardo", href: "castel-viscardo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
