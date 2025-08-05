import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Genova",
  canonical: links.servizi["frantoio-mobile-inerti"]["genova"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Genova",
  locationNames: { label: "Genova", href: "genova" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["genova"],
      name: "Genova",
  }),
});
