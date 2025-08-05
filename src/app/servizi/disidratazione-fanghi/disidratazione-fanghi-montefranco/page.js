import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montefranco",
  canonical: links.servizi["disidratazione-fanghi"]["montefranco"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montefranco",
  locationNames: { label: "Montefranco", href: "montefranco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
