import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sarsina",
  canonical: links.servizi["disidratazione-fanghi"]["sarsina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sarsina",
  locationNames: { label: "Sarsina", href: "sarsina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
