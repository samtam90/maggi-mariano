import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Santa Sofia",
  canonical: links.servizi["pulizia-fognature"]["santa-sofia"],
});
export default withBaseProps({
  title: "Pulizia fognature Santa Sofia",
  locationNames: { label: "Santa Sofia", href: "santa-sofia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
