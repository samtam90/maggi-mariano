import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Premilcuore",
  canonical: links.servizi["pulizia-fognature"]["premilcuore"],
});
export default withBaseProps({
  title: "Pulizia fognature Premilcuore",
  locationNames: { label: "Premilcuore", href: "premilcuore" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
