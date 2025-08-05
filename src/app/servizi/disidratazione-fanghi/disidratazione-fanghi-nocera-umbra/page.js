import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Nocera Umbra",
  canonical: links.servizi["disidratazione-fanghi"]["nocera-umbra"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Nocera Umbra",
  locationNames: { label: "Nocera Umbra", href: "nocera-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
