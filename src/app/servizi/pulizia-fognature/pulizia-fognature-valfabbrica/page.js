import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Valfabbrica",
  canonical: links.servizi["pulizia-fognature"]["valfabbrica"],
});
export default withBaseProps({
  title: "Pulizia fognature Valfabbrica",
  locationNames: { label: "Valfabbrica", href: "valfabbrica" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
