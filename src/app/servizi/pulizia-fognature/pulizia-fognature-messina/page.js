import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Messina",
  canonical: links.servizi["pulizia-fognature"]["messina"],
});
export default withBaseProps({
  title: "Pulizia fognature Messina",
  locationNames: { label: "Messina", href: "messina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["messina"],
      name: "Messina",
  }),
});
