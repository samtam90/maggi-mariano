import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi San Giustino",
  canonical: links.servizi["disidratazione-fanghi"]["san-giustino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi San Giustino",
  locationNames: { label: "San Giustino", href: "san-giustino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
