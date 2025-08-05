import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Londa",
  canonical: links.servizi["pulizia-fognature"]["londa"],
});
export default withBaseProps({
  title: "Pulizia fognature Londa",
  locationNames: { label: "Londa", href: "londa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
