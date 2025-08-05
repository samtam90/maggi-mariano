import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sarteano",
  canonical: links.servizi["noleggio-bagni-chimici"]["sarteano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sarteano",
  locationNames: { label: "Sarteano", href: "sarteano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
