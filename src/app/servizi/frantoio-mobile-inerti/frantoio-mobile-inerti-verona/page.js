import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Verona",
  canonical: links.servizi["frantoio-mobile-inerti"]["verona"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Verona",
  locationNames: { label: "Verona", href: "verona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["verona"],
      name: "Verona",
  }),
});
