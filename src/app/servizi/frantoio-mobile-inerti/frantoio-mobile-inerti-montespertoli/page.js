import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Montespertoli",
  canonical: links.servizi["frantoio-mobile-inerti"]["montespertoli"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Montespertoli",
  locationNames: { label: "Montespertoli", href: "montespertoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
