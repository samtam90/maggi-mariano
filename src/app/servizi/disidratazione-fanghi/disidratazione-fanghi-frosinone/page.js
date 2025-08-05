import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Frosinone",
  canonical: links.servizi["disidratazione-fanghi"]["frosinone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Frosinone",
  locationNames: { label: "Frosinone", href: "frosinone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["frosinone"],
      name: "Frosinone",
  }),
});
