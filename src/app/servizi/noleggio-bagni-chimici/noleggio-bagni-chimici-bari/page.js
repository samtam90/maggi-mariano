import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bari",
  canonical: links.servizi["noleggio-bagni-chimici"]["bari"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bari",
  locationNames: { label: "Bari", href: "bari" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["bari"],
      name: "Bari",
  }),
});
