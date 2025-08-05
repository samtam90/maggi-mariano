import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Vibo Valentia",
  canonical: links.servizi["disidratazione-fanghi"]["vibo-valentia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Vibo Valentia",
  locationNames: { label: "Vibo Valentia", href: "vibo-valentia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["vibo-valentia"],
      name: "Vibo Valentia",
  }),
});
