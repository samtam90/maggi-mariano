import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Nuoro",
  canonical: links.servizi["frantoio-mobile-inerti"]["nuoro"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Nuoro",
  locationNames: { label: "Nuoro", href: "nuoro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["nuoro"],
      name: "Nuoro",
  }),
});
