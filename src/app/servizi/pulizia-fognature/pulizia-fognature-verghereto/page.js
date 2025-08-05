import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Verghereto",
  canonical: links.servizi["pulizia-fognature"]["verghereto"],
});
export default withBaseProps({
  title: "Pulizia fognature Verghereto",
  locationNames: { label: "Verghereto", href: "verghereto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
