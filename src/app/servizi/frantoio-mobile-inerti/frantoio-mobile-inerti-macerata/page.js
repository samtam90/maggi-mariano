import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Macerata",
  canonical: links.servizi["frantoio-mobile-inerti"]["macerata"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Macerata",
  locationNames: { label: "Macerata", href: "macerata" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["macerata"],
      name: "Macerata",
  }),
});
