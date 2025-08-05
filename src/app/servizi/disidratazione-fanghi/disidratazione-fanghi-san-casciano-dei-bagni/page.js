import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi San Casciano dei Bagni",
  canonical: links.servizi["disidratazione-fanghi"]["san-casciano-dei-bagni"],
});
export default withBaseProps({
  title: "Disidratazione fanghi San Casciano dei Bagni",
  locationNames: { label: "San Casciano dei Bagni", href: "san-casciano-dei-bagni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
