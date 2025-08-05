import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Badia Prataglia",
  canonical: links.servizi["frantoio-mobile-inerti"]["badia-prataglia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Badia Prataglia",
  locationNames: { label: "Badia Prataglia", href: "badia-prataglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
