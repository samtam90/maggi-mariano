import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bertinoro",
  canonical: links.servizi["disidratazione-fanghi"]["bertinoro"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bertinoro",
  locationNames: { label: "Bertinoro", href: "bertinoro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
