import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Talla",
  canonical: links.servizi["frantoio-mobile-inerti"]["talla"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Talla",
  locationNames: { label: "Talla", href: "talla" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
