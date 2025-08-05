import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pescara",
  canonical: links.servizi["frantoio-mobile-inerti"]["pescara"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pescara",
  locationNames: { label: "Pescara", href: "pescara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["pescara"],
      name: "Pescara",
  }),
});
