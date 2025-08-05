import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Mantova",
  canonical: links.servizi["pulizia-fognature"]["mantova"],
});
export default withBaseProps({
  title: "Pulizia fognature Mantova",
  locationNames: { label: "Mantova", href: "mantova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
