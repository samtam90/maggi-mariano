import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Portico e San Benedetto",
  canonical: links.servizi["disidratazione-fanghi"]["portico-e-san-benedetto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Portico e San Benedetto",
  locationNames: { label: "Portico e San Benedetto", href: "portico-e-san-benedetto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
