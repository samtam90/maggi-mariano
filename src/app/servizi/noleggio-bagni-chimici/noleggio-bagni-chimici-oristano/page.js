import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Oristano",
  canonical: links.servizi["noleggio-bagni-chimici"]["oristano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Oristano",
  locationNames: { label: "Oristano", href: "oristano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["oristano"],
      name: "Oristano",
  }),
});
