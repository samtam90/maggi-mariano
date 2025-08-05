import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Calvi dell'Umbria",
  canonical: links.servizi["disidratazione-fanghi"]["calvi-dell-umbria"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Calvi dell'Umbria",
  locationNames: { label: "Calvi dell'Umbria", href: "calvi-dell-umbria" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
