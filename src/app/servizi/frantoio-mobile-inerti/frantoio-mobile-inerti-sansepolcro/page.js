import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Sansepolcro",
  canonical: links.servizi["frantoio-mobile-inerti"]["sansepolcro"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Sansepolcro",
  locationNames: { label: "Sansepolcro", href: "sansepolcro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
