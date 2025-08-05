import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature San Casciano dei Bagni",
  canonical: links.servizi["pulizia-fognature"]["san-casciano-dei-bagni"],
});
export default withBaseProps({
  title: "Pulizia fognature San Casciano dei Bagni",
  locationNames: { label: "San Casciano dei Bagni", href: "san-casciano-dei-bagni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
