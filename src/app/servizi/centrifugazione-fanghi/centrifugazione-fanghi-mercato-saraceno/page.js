import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Mercato Saraceno",
  canonical: links.servizi["centrifugazione-fanghi"]["mercato-saraceno"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Mercato Saraceno",
  locationNames: { label: "Mercato Saraceno", href: "mercato-saraceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
