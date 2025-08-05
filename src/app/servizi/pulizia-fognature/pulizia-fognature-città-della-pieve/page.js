import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Città della Pieve",
  canonical: links.servizi["pulizia-fognature"]["città-della-pieve"],
});
export default withBaseProps({
  title: "Pulizia fognature Città della Pieve",
  locationNames: { label: "Città della Pieve", href: "città-della-pieve" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
