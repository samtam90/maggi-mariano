import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sassari",
  canonical: links.servizi["disidratazione-fanghi"]["sassari"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sassari",
  locationNames: { label: "Sassari", href: "sassari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["sassari"],
      name: "Sassari",
  }),
});
