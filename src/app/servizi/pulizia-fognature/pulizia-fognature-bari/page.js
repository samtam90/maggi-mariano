import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bari",
  canonical: links.servizi["pulizia-fognature"]["bari"],
});
export default withBaseProps({
  title: "Pulizia fognature Bari",
  locationNames: { label: "Bari", href: "bari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
