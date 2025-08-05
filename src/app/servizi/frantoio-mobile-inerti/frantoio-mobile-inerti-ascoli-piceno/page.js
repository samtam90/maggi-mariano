import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Ascoli Piceno",
  canonical: links.servizi["frantoio-mobile-inerti"]["ascoli-piceno"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Ascoli Piceno",
  locationNames: { label: "Ascoli Piceno", href: "ascoli-piceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["ascoli-piceno"],
      name: "Ascoli Piceno",
  }),
});
