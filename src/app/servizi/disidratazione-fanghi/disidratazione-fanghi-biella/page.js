import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Biella",
  canonical: links.servizi["disidratazione-fanghi"]["biella"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Biella",
  locationNames: { label: "Biella", href: "biella" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["biella"],
      name: "Biella",
  }),
});
