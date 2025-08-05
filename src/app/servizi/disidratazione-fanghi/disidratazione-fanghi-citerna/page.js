import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Citerna",
  canonical: links.servizi["disidratazione-fanghi"]["citerna"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Citerna",
  locationNames: { label: "Citerna", href: "citerna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
