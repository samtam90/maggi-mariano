import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Crotone",
  canonical: links.servizi["pulizia-fognature"]["crotone"],
});
export default withBaseProps({
  title: "Pulizia fognature Crotone",
  locationNames: { label: "Crotone", href: "crotone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["crotone"],
      name: "Crotone",
  }),
});
