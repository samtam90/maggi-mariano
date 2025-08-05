import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Lodi",
  canonical: links.servizi["disidratazione-fanghi"]["lodi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Lodi",
  locationNames: { label: "Lodi", href: "lodi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["lodi"],
      name: "Lodi",
  }),
});
