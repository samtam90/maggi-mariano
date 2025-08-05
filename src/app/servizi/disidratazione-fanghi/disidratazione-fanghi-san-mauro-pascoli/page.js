import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi San Mauro Pascoli",
  canonical: links.servizi["disidratazione-fanghi"]["san-mauro-pascoli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi San Mauro Pascoli",
  locationNames: { label: "San Mauro Pascoli", href: "san-mauro-pascoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
