import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Foiano in Valdichiana",
  canonical: links.servizi["frantoio-mobile-inerti"]["foiano-in-valdichiana"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Foiano in Valdichiana",
  locationNames: { label: "Foiano in Valdichiana", href: "foiano-in-valdichiana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
