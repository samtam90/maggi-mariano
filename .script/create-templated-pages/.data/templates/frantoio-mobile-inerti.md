import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti [name]",
  canonical: links.servizi["frantoio-mobile-inerti"]["[path]"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti [name]",
  locationNames: { label: "[name]", href: "[path]" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});
