import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Civitella di Romagna",
  canonical: links.servizi["pulizia-fognature"]["civitella-di-romagna"],
});
export default withBaseProps({
  title: "Pulizia fognature Civitella di Romagna",
  locationNames: { label: "Civitella di Romagna", href: "civitella-di-romagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
