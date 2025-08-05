import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Piancastagnaio",
  canonical: links.servizi["noleggio-bagni-chimici"]["piancastagnaio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Piancastagnaio",
  locationNames: { label: "Piancastagnaio", href: "piancastagnaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
