import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Forlì",
  canonical: links.servizi["pulizia-fognature"]["forli"],
});
export default withBaseProps({
  title: "Pulizia fognature Forlì",
  locationNames: { label: "Forlì", href: "forli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
