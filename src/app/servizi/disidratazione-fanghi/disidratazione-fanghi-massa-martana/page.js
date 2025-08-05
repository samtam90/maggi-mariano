import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Massa Martana",
  canonical: links.servizi["disidratazione-fanghi"]["massa-martana"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Massa Martana",
  locationNames: { label: "Massa Martana", href: "massa-martana" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
