import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Avigliano Umbro",
  canonical: links.servizi["noleggio-bagni-chimici"]["avigliano-umbro"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Avigliano Umbro",
  locationNames: { label: "Avigliano Umbro", href: "avigliano-umbro" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
