import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Catania",
  canonical: links.servizi["centrifugazione-fanghi"]["catania"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Catania",
  locationNames: { label: "Catania", href: "catania" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
