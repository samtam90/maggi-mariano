import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Fossato di Vico",
  canonical: links.servizi["disidratazione-fanghi"]["fossato-di-vico"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Fossato di Vico",
  locationNames: { label: "Fossato di Vico", href: "fossato-di-vico" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
