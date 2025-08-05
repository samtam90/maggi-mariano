import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bari",
  canonical: links.servizi["disidratazione-fanghi"]["bari"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bari",
  locationNames: { label: "Bari", href: "bari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
