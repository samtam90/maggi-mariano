import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Dovadola",
  canonical: links.servizi["disidratazione-fanghi"]["dovadola"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Dovadola",
  locationNames: { label: "Dovadola", href: "dovadola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
