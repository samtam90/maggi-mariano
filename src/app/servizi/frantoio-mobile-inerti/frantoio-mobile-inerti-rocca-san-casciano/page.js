import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Rocca San Casciano",
  canonical: links.servizi["frantoio-mobile-inerti"]["rocca-san-casciano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Rocca San Casciano",
  locationNames: { label: "Rocca San Casciano", href: "rocca-san-casciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
