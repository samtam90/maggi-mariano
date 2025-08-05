import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Lecce",
  canonical: links.servizi["disidratazione-fanghi"]["lecce"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Lecce",
  locationNames: { label: "Lecce", href: "lecce" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["lecce"],
      name: "Lecce",
  }),
});
