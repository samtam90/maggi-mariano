import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Mercato Saraceno",
  canonical: links.servizi["disidratazione-fanghi"]["mercato-saraceno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Mercato Saraceno",
  locationNames: { label: "Mercato Saraceno", href: "mercato-saraceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
