import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Vicchio",
  canonical: links.servizi["disidratazione-fanghi"]["vicchio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Vicchio",
  locationNames: { label: "Vicchio", href: "vicchio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
