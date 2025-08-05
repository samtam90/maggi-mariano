import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Napoli",
  canonical: links.servizi["disidratazione-fanghi"]["napoli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Napoli",
  locationNames: { label: "Napoli", href: "napoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["napoli"],
      name: "Napoli",
  }),
});
