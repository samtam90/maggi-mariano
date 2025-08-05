import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Messina",
  canonical: links.servizi["disidratazione-fanghi"]["messina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Messina",
  locationNames: { label: "Messina", href: "messina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["messina"],
      name: "Messina",
  }),
});
