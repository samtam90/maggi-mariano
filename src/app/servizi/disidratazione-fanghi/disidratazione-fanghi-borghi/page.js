import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Borghi",
  canonical: links.servizi["disidratazione-fanghi"]["borghi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Borghi",
  locationNames: { label: "Borghi", href: "borghi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
