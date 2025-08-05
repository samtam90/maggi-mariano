import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pelago",
  canonical: links.servizi["pulizia-fognature"]["pelago"],
});
export default withBaseProps({
  title: "Pulizia fognature Pelago",
  locationNames: { label: "Pelago", href: "pelago" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
