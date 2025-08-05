import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Enna",
  canonical: links.servizi["noleggio-bagni-chimici"]["enna"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Enna",
  locationNames: { label: "Enna", href: "enna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["enna"],
      name: "Enna",
  }),
});
