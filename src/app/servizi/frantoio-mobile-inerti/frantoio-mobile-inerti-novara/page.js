import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Novara",
  canonical: links.servizi["frantoio-mobile-inerti"]["novara"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Novara",
  locationNames: { label: "Novara", href: "novara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["novara"],
      name: "Novara",
  }),
});
