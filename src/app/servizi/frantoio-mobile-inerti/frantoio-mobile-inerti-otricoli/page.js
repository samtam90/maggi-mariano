import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Otricoli",
  canonical: links.servizi["frantoio-mobile-inerti"]["otricoli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Otricoli",
  locationNames: { label: "Otricoli", href: "otricoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
