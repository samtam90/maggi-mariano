import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Todi",
  canonical: links.servizi["disidratazione-fanghi"]["todi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Todi",
  locationNames: { label: "Todi", href: "todi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
