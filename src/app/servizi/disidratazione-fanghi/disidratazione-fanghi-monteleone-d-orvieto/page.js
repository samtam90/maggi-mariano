import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Monteleone d'Orvieto",
  canonical: links.servizi["disidratazione-fanghi"]["monteleone-d-orvieto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Monteleone d'Orvieto",
  locationNames: { label: "Monteleone d'Orvieto", href: "monteleone-d-orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
