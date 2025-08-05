import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Monteleone d'Orvieto",
  canonical: links.servizi["pulizia-fognature"]["monteleone-d-orvieto"],
});
export default withBaseProps({
  title: "Pulizia fognature Monteleone d'Orvieto",
  locationNames: { label: "Monteleone d'Orvieto", href: "monteleone-d-orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
