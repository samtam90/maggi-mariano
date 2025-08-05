import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Orvieto",
  canonical: links.servizi["pulizia-fognature"]["orvieto"],
});
export default withBaseProps({
  title: "Pulizia fognature Orvieto",
  locationNames: { label: "Orvieto", href: "orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
