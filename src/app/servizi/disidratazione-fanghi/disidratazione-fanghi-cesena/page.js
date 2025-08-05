import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cesena",
  canonical: links.servizi["disidratazione-fanghi"]["cesena"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cesena",
  locationNames: { label: "Cesena", href: "cesena" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
