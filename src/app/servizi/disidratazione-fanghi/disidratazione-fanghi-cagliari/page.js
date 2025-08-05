import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cagliari",
  canonical: links.servizi["disidratazione-fanghi"]["cagliari"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cagliari",
  locationNames: { label: "Cagliari", href: "cagliari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["cagliari"],
      name: "Cagliari",
  }),
});
