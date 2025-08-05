import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Ogliastra",
  canonical: links.servizi["frantoio-mobile-inerti"]["ogliastra"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Ogliastra",
  locationNames: { label: "Ogliastra", href: "ogliastra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["ogliastra"],
      name: "Ogliastra",
  }),
});
