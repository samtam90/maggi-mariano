import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Santa Sofia",
  canonical: links.servizi["disidratazione-fanghi"]["santa-sofia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Santa Sofia",
  locationNames: { label: "Santa Sofia", href: "santa-sofia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
