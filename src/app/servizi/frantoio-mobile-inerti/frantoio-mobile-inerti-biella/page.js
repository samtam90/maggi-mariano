import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Biella",
  canonical: links.servizi["frantoio-mobile-inerti"]["biella"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Biella",
  locationNames: { label: "Biella", href: "biella" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["biella"],
      name: "Biella",
  }),
});
