import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Lecco",
  canonical: links.servizi["disidratazione-fanghi"]["lecco"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Lecco",
  locationNames: { label: "Lecco", href: "lecco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["lecco"],
      name: "Lecco",
  }),
});
