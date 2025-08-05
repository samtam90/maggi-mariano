import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Collazzone",
  canonical: links.servizi["pulizia-fognature"]["collazzone"],
});
export default withBaseProps({
  title: "Pulizia fognature Collazzone",
  locationNames: { label: "Collazzone", href: "collazzone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
