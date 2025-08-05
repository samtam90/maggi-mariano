import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Longiano",
  canonical: links.servizi["disidratazione-fanghi"]["longiano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Longiano",
  locationNames: { label: "Longiano", href: "longiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
