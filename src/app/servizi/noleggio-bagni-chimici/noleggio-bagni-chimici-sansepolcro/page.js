import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sansepolcro",
  canonical: links.servizi["noleggio-bagni-chimici"]["sansepolcro"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sansepolcro",
  locationNames: { label: "Sansepolcro", href: "sansepolcro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
