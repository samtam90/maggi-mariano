import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sellano",
  canonical: links.servizi["noleggio-bagni-chimici"]["sellano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sellano",
  locationNames: { label: "Sellano", href: "sellano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
