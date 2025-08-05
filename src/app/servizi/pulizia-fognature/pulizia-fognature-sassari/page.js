import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sassari",
  canonical: links.servizi["pulizia-fognature"]["sassari"],
});
export default withBaseProps({
  title: "Pulizia fognature Sassari",
  locationNames: { label: "Sassari", href: "sassari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["sassari"],
      name: "Sassari",
  }),
});
