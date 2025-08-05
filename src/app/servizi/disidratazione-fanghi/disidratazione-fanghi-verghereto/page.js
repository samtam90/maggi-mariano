import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Verghereto",
  canonical: links.servizi["disidratazione-fanghi"]["verghereto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Verghereto",
  locationNames: { label: "Verghereto", href: "verghereto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
