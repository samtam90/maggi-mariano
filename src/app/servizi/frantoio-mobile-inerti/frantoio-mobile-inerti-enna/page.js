import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Enna",
  canonical: links.servizi["frantoio-mobile-inerti"]["enna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Enna",
  locationNames: { label: "Enna", href: "enna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["enna"],
      name: "Enna",
  }),
});
