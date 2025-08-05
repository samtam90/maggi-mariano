import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Pratovecchio Stia",
  canonical: links.servizi["frantoio-mobile-inerti"]["pratovecchio-stia"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Pratovecchio Stia",
  locationNames: { label: "Pratovecchio Stia", href: "pratovecchio-stia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
