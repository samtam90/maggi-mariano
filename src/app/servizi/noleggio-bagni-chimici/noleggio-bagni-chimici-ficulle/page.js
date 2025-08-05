import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ficulle",
  canonical: links.servizi["noleggio-bagni-chimici"]["ficulle"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Ficulle",
  locationNames: { label: "Ficulle", href: "ficulle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
