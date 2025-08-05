import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Rocca San Casciano",
  canonical: links.servizi["pulizia-fognature"]["rocca-san-casciano"],
});
export default withBaseProps({
  title: "Pulizia fognature Rocca San Casciano",
  locationNames: { label: "Rocca San Casciano", href: "rocca-san-casciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
