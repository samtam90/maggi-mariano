import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti San Casciano dei Bagni",
  canonical: links.servizi["frantoio-mobile-inerti"]["san-casciano-dei-bagni"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti San Casciano dei Bagni",
  locationNames: { label: "San Casciano dei Bagni", href: "san-casciano-dei-bagni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
