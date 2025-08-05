import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Modigliana",
  canonical: links.servizi["disidratazione-fanghi"]["modigliana"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Modigliana",
  locationNames: { label: "Modigliana", href: "modigliana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
