import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Catania",
  canonical: links.servizi["disidratazione-fanghi"]["catania"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Catania",
  locationNames: { label: "Catania", href: "catania" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
