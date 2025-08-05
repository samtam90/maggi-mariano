import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Modigliana",
  canonical: links.servizi["centrifugazione-fanghi"]["modigliana"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Modigliana",
  locationNames: { label: "Modigliana", href: "modigliana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
