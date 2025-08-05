import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cesenatico",
  canonical: links.servizi["disidratazione-fanghi"]["cesenatico"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cesenatico",
  locationNames: { label: "Cesenatico", href: "cesenatico" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
