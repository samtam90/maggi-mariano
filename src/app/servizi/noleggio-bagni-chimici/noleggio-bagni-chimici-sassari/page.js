import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sassari",
  canonical: links.servizi["noleggio-bagni-chimici"]["sassari"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sassari",
  locationNames: { label: "Sassari", href: "sassari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["sassari"],
      name: "Sassari",
  }),
});
