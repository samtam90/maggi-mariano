import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Catania",
  canonical: links.servizi["frantoio-mobile-inerti"]["catania"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Catania",
  locationNames: { label: "Catania", href: "catania" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["catania"],
      name: "Catania",
  }),
});
