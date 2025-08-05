import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Roma",
  canonical: links.servizi["noleggio-bagni-chimici"]["roma"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Roma",
  locationNames: { label: "Roma", href: "roma" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["roma"],
      name: "Roma",
  }),
});
