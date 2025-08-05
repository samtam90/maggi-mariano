import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Trequanda",
  canonical: links.servizi["frantoio-mobile-inerti"]["trequanda"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Trequanda",
  locationNames: { label: "Trequanda", href: "trequanda" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
