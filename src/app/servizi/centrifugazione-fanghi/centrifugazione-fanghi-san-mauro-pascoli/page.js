import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi San Mauro Pascoli",
  canonical: links.servizi["centrifugazione-fanghi"]["san-mauro-pascoli"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi San Mauro Pascoli",
  locationNames: { label: "San Mauro Pascoli", href: "san-mauro-pascoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
