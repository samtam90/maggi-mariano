import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Monteleone d'Orvieto",
  canonical: links.servizi["centrifugazione-fanghi"]["monteleone-d-orvieto"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Monteleone d'Orvieto",
  locationNames: { label: "Monteleone d'Orvieto", href: "monteleone-d-orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
