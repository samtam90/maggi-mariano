import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Rocca San Casciano",
  canonical: links.servizi["disidratazione-fanghi"]["rocca-san-casciano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Rocca San Casciano",
  locationNames: { label: "Rocca San Casciano", href: "rocca-san-casciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
