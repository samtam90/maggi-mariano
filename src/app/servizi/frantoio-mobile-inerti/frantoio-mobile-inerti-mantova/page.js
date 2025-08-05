import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Mantova",
  canonical: links.servizi["frantoio-mobile-inerti"]["mantova"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Mantova",
  locationNames: { label: "Mantova", href: "mantova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["mantova"],
      name: "Mantova",
  }),
});
