import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Cosenza",
  canonical: links.servizi["pulizia-fognature"]["cosenza"],
});
export default withBaseProps({
  title: "Pulizia fognature Cosenza",
  locationNames: { label: "Cosenza", href: "cosenza" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["cosenza"],
      name: "Cosenza",
  }),
});
