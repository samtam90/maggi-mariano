import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pavia",
  canonical: links.servizi["noleggio-bagni-chimici"]["pavia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pavia",
  locationNames: { label: "Pavia", href: "pavia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["pavia"],
      name: "Pavia",
  }),
});
