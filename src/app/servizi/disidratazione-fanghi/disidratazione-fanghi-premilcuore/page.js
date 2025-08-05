import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Premilcuore",
  canonical: links.servizi["disidratazione-fanghi"]["premilcuore"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Premilcuore",
  locationNames: { label: "Premilcuore", href: "premilcuore" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
