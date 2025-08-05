import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Sansepolcro",
  canonical: links.servizi["pulizia-fognature"]["sansepolcro"],
});
export default withBaseProps({
  title: "Pulizia fognature Sansepolcro",
  locationNames: { label: "Sansepolcro", href: "sansepolcro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
