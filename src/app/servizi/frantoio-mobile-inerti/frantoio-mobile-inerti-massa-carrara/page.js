import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Massa-Carrara",
  canonical: links.servizi["frantoio-mobile-inerti"]["massa-carrara"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Massa-Carrara",
  locationNames: { label: "Massa-Carrara", href: "massa-carrara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["massa-carrara"],
      name: "Massa-Carrara",
  }),
});
