import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti San Mauro Pascoli",
  canonical: links.servizi["frantoio-mobile-inerti"]["san-mauro-pascoli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti San Mauro Pascoli",
  locationNames: { label: "San Mauro Pascoli", href: "san-mauro-pascoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
