import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castel Ritaldi",
  canonical: links.servizi["pulizia-fognature"]["castel-ritaldi"],
});
export default withBaseProps({
  title: "Pulizia fognature Castel Ritaldi",
  locationNames: { label: "Castel Ritaldi", href: "castel-ritaldi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
