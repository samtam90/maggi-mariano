import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Forlì",
  canonical: links.servizi["disidratazione-fanghi"]["forli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Forlì",
  locationNames: { label: "Forlì", href: "forli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
