import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Amelia",
  canonical: links.servizi["frantoio-mobile-inerti"]["amelia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Amelia",
  locationNames: { label: "Amelia", href: "amelia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
