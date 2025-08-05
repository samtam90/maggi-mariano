import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Ancona",
  canonical: links.servizi["frantoio-mobile-inerti"]["ancona"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Ancona",
  locationNames: { label: "Ancona", href: "ancona" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["ancona"],
      name: "Ancona",
  }),
});
