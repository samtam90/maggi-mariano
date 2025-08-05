import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Allerona",
  canonical: links.servizi["frantoio-mobile-inerti"]["allerona"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Allerona",
  locationNames: { label: "Allerona", href: "allerona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
