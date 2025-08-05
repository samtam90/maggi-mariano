import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi San Casciano dei Bagni",
  canonical: links.servizi["centrifugazione-fanghi"]["san-casciano-dei-bagni"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi San Casciano dei Bagni",
  locationNames: { label: "San Casciano dei Bagni", href: "san-casciano-dei-bagni" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
