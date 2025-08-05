import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Ravenna",
  canonical: links.servizi["frantoio-mobile-inerti"]["ravenna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Ravenna",
  locationNames: { label: "Ravenna", href: "ravenna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["ravenna"],
      name: "Ravenna",
  }),
});
