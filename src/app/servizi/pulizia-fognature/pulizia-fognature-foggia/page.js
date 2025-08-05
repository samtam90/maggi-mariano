import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Foggia",
  canonical: links.servizi["pulizia-fognature"]["foggia"],
});
export default withBaseProps({
  title: "Pulizia fognature Foggia",
  locationNames: { label: "Foggia", href: "foggia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["foggia"],
      name: "Foggia",
  }),
});
