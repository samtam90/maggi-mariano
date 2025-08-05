import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Mauro Pascoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-mauro-pascoli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici San Mauro Pascoli",
  locationNames: { label: "San Mauro Pascoli", href: "san-mauro-pascoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
