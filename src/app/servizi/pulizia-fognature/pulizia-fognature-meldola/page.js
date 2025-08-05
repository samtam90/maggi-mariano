import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Meldola",
  canonical: links.servizi["pulizia-fognature"]["meldola"],
});
export default withBaseProps({
  title: "Pulizia fognature Meldola",
  locationNames: { label: "Meldola", href: "meldola" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["forli-cesena"],
      name: "Forlì Cesena",
  }),
});
