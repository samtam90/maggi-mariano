import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature San Mauro Pascoli",
  canonical: links.servizi["pulizia-fognature"]["san-mauro-pascoli"],
});
export default withBaseProps({
  title: "Pulizia fognature San Mauro Pascoli",
  locationNames: { label: "San Mauro Pascoli", href: "san-mauro-pascoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
