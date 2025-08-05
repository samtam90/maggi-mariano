import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Catanzaro",
  canonical: links.servizi["disidratazione-fanghi"]["catanzaro"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Catanzaro",
  locationNames: { label: "Catanzaro", href: "catanzaro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["catanzaro"],
      name: "Catanzaro",
  }),
});
