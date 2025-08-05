import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Predappio",
  canonical: links.servizi["disidratazione-fanghi"]["predappio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Predappio",
  locationNames: { label: "Predappio", href: "predappio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
