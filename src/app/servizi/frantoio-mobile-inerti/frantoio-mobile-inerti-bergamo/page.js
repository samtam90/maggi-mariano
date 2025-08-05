import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Bergamo",
  canonical: links.servizi["frantoio-mobile-inerti"]["bergamo"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Bergamo",
  locationNames: { label: "Bergamo", href: "bergamo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["bergamo"],
      name: "Bergamo",
  }),
});
