import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Pistoia",
  canonical: links.servizi["pulizia-fognature"]["pistoia"],
});
export default withBaseProps({
  title: "Pulizia fognature Pistoia",
  locationNames: { label: "Pistoia", href: "pistoia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["pistoia"],
      name: "Pistoia",
  }),
});
