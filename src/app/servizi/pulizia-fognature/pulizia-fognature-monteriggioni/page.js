import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monteriggioni",
  canonical: links.servizi["pulizia-fognature"]["monteriggioni"],
});
export default withBaseProps({
  title: "Pulizia fognature Monteriggioni",
  locationNames: { label: "Monteriggioni", href: "monteriggioni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
