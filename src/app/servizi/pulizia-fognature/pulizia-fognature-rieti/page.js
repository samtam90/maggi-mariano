import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Rieti",
  canonical: links.servizi["pulizia-fognature"]["rieti"],
});
export default withBaseProps({
  title: "Pulizia fognature Rieti",
  locationNames: { label: "Rieti", href: "rieti" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["rieti"],
      name: "Rieti",
  }),
});
