import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Giove",
  canonical: links.servizi["disidratazione-fanghi"]["giove"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Giove",
  locationNames: { label: "Giove", href: "giove" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
