import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Roma",
  canonical: links.servizi["pulizia-fognature"]["roma"],
});
export default withBaseProps({
  title: "Pulizia fognature Roma",
  locationNames: { label: "Roma", href: "roma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
