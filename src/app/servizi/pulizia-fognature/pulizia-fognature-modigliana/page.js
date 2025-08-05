import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Modigliana",
  canonical: links.servizi["pulizia-fognature"]["modigliana"],
});
export default withBaseProps({
  title: "Pulizia fognature Modigliana",
  locationNames: { label: "Modigliana", href: "modigliana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
