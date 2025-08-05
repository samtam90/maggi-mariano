import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Montiano",
  canonical: links.servizi["pulizia-fognature"]["montiano"],
});
export default withBaseProps({
  title: "Pulizia fognature Montiano",
  locationNames: { label: "Montiano", href: "montiano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
