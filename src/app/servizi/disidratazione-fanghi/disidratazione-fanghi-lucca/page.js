import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Lucca",
  canonical: links.servizi["disidratazione-fanghi"]["lucca"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Lucca",
  locationNames: { label: "Lucca", href: "lucca" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["lucca"],
      name: "Lucca",
  }),
});
